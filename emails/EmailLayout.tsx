import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";
import type { ReactNode } from "react";

export function EmailLayout({ preview, title, children }: { preview: string; title: string; children: ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={{ backgroundColor: "#f6f7f9", fontFamily: "Arial, Helvetica, sans-serif", margin: 0, padding: "24px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: 12, padding: 24, maxWidth: 560 }}>
          <Heading as="h1" style={{ fontSize: 22, color: "#111827", margin: "0 0 16px" }}>
            {title}
          </Heading>
          {children}
        </Container>
      </Body>
    </Html>
  );
}

export function Field({ label, value }: { label: string; value: string }) {
  return (
    <Section style={{ marginBottom: 12 }}>
      <Text style={{ margin: 0, fontSize: 12, color: "#6b7280", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</Text>
      <Text style={{ margin: "2px 0 0", fontSize: 16, color: "#111827", whiteSpace: "pre-wrap" }}>{value}</Text>
    </Section>
  );
}
