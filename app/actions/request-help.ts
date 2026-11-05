"use server";

import { getSupabase } from "@/lib/supabase";
import { getResend, ADMIN_FROM } from "@/lib/resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { firstError, formFields, helpRequestSchema, type FormState } from "@/lib/validation";
import HelpRequestEmail from "@/emails/HelpRequestEmail";
import { redirect } from "next/navigation";

const FIELDS = [
  "volunteer_id",
  "senior_name",
  "senior_phone",
  "senior_email",
  "senior_address",
  "description",
  "preferred_date",
] as const;

export async function requestHelp(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await verifyTurnstile(formData.get("cf-turnstile-response")))) {
    return { error: "We couldn't verify you're not a robot. Please try again." };
  }

  const parsed = helpRequestSchema.safeParse(formFields(formData, FIELDS));
  if (!parsed.success) return { error: firstError(parsed.error) };
  const input = parsed.data;

  const supabase = getSupabase();

  // Look up the volunteer server-side rather than trusting a name sent by the browser.
  const { data: volunteer } = await supabase
    .from("volunteers")
    .select("name")
    .eq("id", input.volunteer_id)
    .maybeSingle();
  if (!volunteer) return { error: "That volunteer could not be found. Please refresh and try again." };

  const { error: dbError } = await supabase.from("help_requests").insert({
    ...input,
    status: "pending",
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return { error: "Failed to submit request. Please try again." };
  }

  const { error: emailError } = await getResend().emails.send({
    from: ADMIN_FROM,
    to: process.env.ADMIN_EMAIL!,
    subject: `New Help Request - ${input.senior_name} needs ${volunteer.name}`,
    react: HelpRequestEmail({
      seniorName: input.senior_name,
      seniorPhone: input.senior_phone,
      seniorEmail: input.senior_email,
      seniorAddress: input.senior_address,
      volunteerName: volunteer.name,
      description: input.description,
      preferredDate: input.preferred_date,
    }),
  });

  if (emailError) {
    console.error("Resend email error:", emailError);
  }

  redirect("/request/success");
}
