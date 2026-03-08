"use server";

import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import { redirect } from "next/navigation";

export async function volunteerSignup(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || null;
  const bio = formData.get("bio") as string;
  const photo = formData.get("photo") as File | null;

  const supabase = getSupabase();

  // Upload photo if provided
  let photoUrl: string | null = null;
  if (photo && photo.size > 0) {
    const ext = photo.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("volunteer-photos")
      .upload(fileName, photo);

    if (!uploadError) {
      const { data: urlData } = supabase.storage
        .from("volunteer-photos")
        .getPublicUrl(fileName);
      photoUrl = urlData.publicUrl;
    }
  }

  const { error } = await supabase.from("volunteers").insert({
    name,
    email,
    phone,
    bio,
    photo_url: photoUrl,
  });

  if (error) {
    throw new Error("Failed to sign up. Please try again.");
  }

  await getResend().emails.send({
    from: "BuddyBridge <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL!,
    subject: `New Volunteer Signup — ${name}`,
    text: [
      `A new volunteer has signed up!`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone ?? "Not provided"}`,
      `Bio: ${bio}`,
      ``,
      `Please review their profile in the database.`,
    ].join("\n"),
  });

  redirect("/volunteer/signup?success=true");
}
