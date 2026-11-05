"use server";

import { getSupabase } from "@/lib/supabase";
import { getResend, ADMIN_FROM } from "@/lib/resend";
import { verifyTurnstile } from "@/lib/turnstile";
import {
  ALLOWED_PHOTO_TYPES,
  MAX_PHOTO_BYTES,
  firstError,
  formFields,
  volunteerSignupSchema,
  type FormState,
} from "@/lib/validation";
import VolunteerSignupEmail from "@/emails/VolunteerSignupEmail";
import { redirect } from "next/navigation";

export async function volunteerSignup(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await verifyTurnstile(formData.get("cf-turnstile-response")))) {
    return { error: "We couldn't verify you're not a robot. Please try again." };
  }

  const parsed = volunteerSignupSchema.safeParse(formFields(formData, ["name", "email", "phone", "bio"]));
  if (!parsed.success) return { error: firstError(parsed.error) };
  const input = parsed.data;

  const photoEntry = formData.get("photo");
  const photo = photoEntry instanceof File && photoEntry.size > 0 ? photoEntry : null;
  if (photo) {
    if (!(photo.type in ALLOWED_PHOTO_TYPES)) return { error: "Please upload a JPEG, PNG or WebP photo." };
    if (photo.size > MAX_PHOTO_BYTES) return { error: "That photo is too large. Please use one under 5 MB." };
  }

  const supabase = getSupabase();

  let photoUrl: string | null = null;
  if (photo) {
    const ext = ALLOWED_PHOTO_TYPES[photo.type as keyof typeof ALLOWED_PHOTO_TYPES];
    const fileName = `${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("volunteer-photos")
      .upload(fileName, photo, { contentType: photo.type });

    if (uploadError) {
      console.error("Photo upload error:", uploadError);
    } else {
      photoUrl = supabase.storage.from("volunteer-photos").getPublicUrl(fileName).data.publicUrl;
    }
  }

  const { error } = await supabase.from("volunteers").insert({ ...input, photo_url: photoUrl });

  if (error) {
    console.error("Supabase insert error:", error);
    return { error: "Failed to sign up. Please try again." };
  }

  const { error: emailError } = await getResend().emails.send({
    from: ADMIN_FROM,
    to: process.env.ADMIN_EMAIL!,
    subject: `New Volunteer Signup — ${input.name}`,
    react: VolunteerSignupEmail({ ...input, hasPhoto: photoUrl !== null }),
  });

  if (emailError) {
    console.error("Resend email error:", emailError);
  }

  redirect("/volunteer/signup?success=true");
}
