"use server";

import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import { redirect } from "next/navigation";

export async function requestHelp(formData: FormData) {
  const volunteerId = formData.get("volunteer_id") as string;
  const volunteerName = formData.get("volunteer_name") as string;
  const seniorName = formData.get("senior_name") as string;
  const seniorPhone = formData.get("senior_phone") as string;
  const seniorEmail = (formData.get("senior_email") as string) || null;
  const seniorAddress = formData.get("senior_address") as string;
  const description = formData.get("description") as string;
  const preferredDate = formData.get("preferred_date") as string;

  const { error: dbError } = await getSupabase().from("help_requests").insert({
    volunteer_id: volunteerId,
    senior_name: seniorName,
    senior_phone: seniorPhone,
    senior_email: seniorEmail,
    senior_address: seniorAddress,
    description,
    preferred_date: preferredDate,
    status: "pending",
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    throw new Error("Failed to submit request. Please try again.");
  }

  const { error: emailError } = await getResend().emails.send({
    from: "BuddyBridge <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL!,
    subject: `New Help Request - ${seniorName} needs ${volunteerName}`,
    text: [
      `New help request received!`,
      ``,
      `Senior: ${seniorName}`,
      `Phone: ${seniorPhone}`,
      `Email: ${seniorEmail ?? "Not provided"}`,
      `Address: ${seniorAddress}`,
      ``,
      `Requested Volunteer: ${volunteerName}`,
      `What they need: ${description}`,
      `Preferred timing: ${preferredDate}`,
      ``,
      `Please coordinate with the volunteer and confirm with the senior.`,
    ].join("\n"),
  });

  if (emailError) {
    console.error("Resend email error:", emailError);
  }

  redirect("/request/success");
}
