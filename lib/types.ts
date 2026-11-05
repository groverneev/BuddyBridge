export interface Volunteer {
  id: string;
  name: string;
  photo_url: string | null;
  bio: string;
  categories: string[];
  availability: Record<string, string[]>;
  email: string;
  phone: string | null;
  created_at: string;
}

/** Columns that are safe to send to the browser (no contact details). */
export const PUBLIC_VOLUNTEER_COLUMNS =
  "id, name, photo_url, bio, categories, availability, created_at" as const;

export type PublicVolunteer = Omit<Volunteer, "email" | "phone">;

export interface SiteImage {
  id: string;
  bucket: string;
  path: string;
  section: "pilot" | "homepage";
  alt_text: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  sort_order: number;
  is_featured: boolean;
  created_at: string;
}

export interface SiteImageWithUrl extends SiteImage {
  url: string;
}

export interface HelpRequest {
  id: string;
  volunteer_id: string;
  senior_name: string;
  senior_phone: string;
  senior_email: string | null;
  senior_address: string;
  description: string;
  preferred_date: string;
  status: "pending" | "confirmed" | "completed";
  created_at: string;
}
