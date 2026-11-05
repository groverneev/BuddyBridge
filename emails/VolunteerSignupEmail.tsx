import { Hr, Text } from "@react-email/components";
import { EmailLayout, Field } from "./EmailLayout";

export type VolunteerSignupEmailProps = {
  name: string;
  email: string;
  phone: string | null;
  bio: string;
  hasPhoto: boolean;
};

export default function VolunteerSignupEmail(p: VolunteerSignupEmailProps) {
  return (
    <EmailLayout preview={`${p.name} signed up to volunteer`} title="New volunteer signup">
      <Field label="Name" value={p.name} />
      <Field label="Email" value={p.email} />
      <Field label="Phone" value={p.phone ?? "Not provided"} />
      <Field label="Photo" value={p.hasPhoto ? "Uploaded" : "None"} />
      <Field label="Bio" value={p.bio} />
      <Hr />
      <Text style={{ fontSize: 14, color: "#374151" }}>Please review their profile in the database.</Text>
    </EmailLayout>
  );
}

VolunteerSignupEmail.PreviewProps = {
  name: "Alex Kim",
  email: "alex@example.com",
  phone: null,
  bio: "I love helping with tech and gardening.",
  hasPhoto: true,
} satisfies VolunteerSignupEmailProps;
