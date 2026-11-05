import { Hr, Text } from "@react-email/components";
import { EmailLayout, Field } from "./EmailLayout";

export type HelpRequestEmailProps = {
  seniorName: string;
  seniorPhone: string;
  seniorEmail: string | null;
  seniorAddress: string;
  volunteerName: string;
  description: string;
  preferredDate: string;
};

export default function HelpRequestEmail(p: HelpRequestEmailProps) {
  return (
    <EmailLayout preview={`${p.seniorName} needs help from ${p.volunteerName}`} title="New help request">
      <Field label="Senior" value={p.seniorName} />
      <Field label="Phone" value={p.seniorPhone} />
      <Field label="Email" value={p.seniorEmail ?? "Not provided"} />
      <Field label="Address" value={p.seniorAddress} />
      <Hr />
      <Field label="Requested volunteer" value={p.volunteerName} />
      <Field label="What they need" value={p.description} />
      <Field label="Preferred timing" value={p.preferredDate} />
      <Hr />
      <Text style={{ fontSize: 14, color: "#374151" }}>
        Please coordinate with the volunteer and confirm with the senior.
      </Text>
    </EmailLayout>
  );
}

HelpRequestEmail.PreviewProps = {
  seniorName: "Margaret Lee",
  seniorPhone: "(555) 123-4567",
  seniorEmail: null,
  seniorAddress: "123 Main St, Springfield",
  volunteerName: "Alex",
  description: "Help setting up video calls on my tablet",
  preferredDate: "Saturday afternoon",
} satisfies HelpRequestEmailProps;
