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

export interface HelpRequest {
  id: string;
  volunteer_id: string;
  senior_name: string;
  senior_phone: string;
  senior_email: string | null;
  description: string;
  preferred_date: string;
  status: "pending" | "confirmed" | "completed";
  created_at: string;
}
