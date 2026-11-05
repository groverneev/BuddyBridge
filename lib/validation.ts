import { z } from "zod";

const text = (max: number) => z.string().trim().min(1, "This field is required.").max(max, `Please keep this under ${max} characters.`);

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((v) => v || null);

const optionalEmail = z
  .string()
  .trim()
  .pipe(z.union([z.literal(""), z.email("Please enter a valid email address.")]))
  .transform((v) => v || null);

export const helpRequestSchema = z.object({
  volunteer_id: z.uuid(),
  senior_name: text(120),
  senior_phone: text(40),
  senior_email: optionalEmail,
  senior_address: text(300),
  description: text(2000),
  preferred_date: text(200),
});

export const volunteerSignupSchema = z.object({
  name: text(120),
  email: z.string().trim().pipe(z.email("Please enter a valid email address.")),
  phone: optionalText(40),
  bio: text(2000),
});

export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
export const ALLOWED_PHOTO_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
} as const;

/** Reads string fields from FormData (missing fields become ""). */
export function formFields<K extends string>(formData: FormData, keys: readonly K[]): Record<K, string> {
  return Object.fromEntries(
    keys.map((k) => {
      const v = formData.get(k);
      return [k, typeof v === "string" ? v : ""];
    })
  ) as Record<K, string>;
}

/** First validation message, for showing above a form. */
export function firstError(error: z.ZodError): string {
  return error.issues[0]?.message ?? "Please check the form and try again.";
}

export type FormState = { error: string } | null;
