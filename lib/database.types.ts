// Database types in the format produced by `supabase gen types typescript`.
// Regenerate from the live project with: bun run gen:types
// (written by hand from supabase/schema.sql until then)

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      volunteers: {
        Row: {
          id: string;
          name: string;
          photo_url: string | null;
          bio: string;
          categories: string[];
          availability: Json;
          email: string;
          phone: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          photo_url?: string | null;
          bio: string;
          categories?: string[];
          availability?: Json;
          email: string;
          phone?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          photo_url?: string | null;
          bio?: string;
          categories?: string[];
          availability?: Json;
          email?: string;
          phone?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      help_requests: {
        Row: {
          id: string;
          volunteer_id: string;
          senior_name: string;
          senior_phone: string;
          senior_email: string | null;
          senior_address: string;
          description: string;
          preferred_date: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          volunteer_id: string;
          senior_name: string;
          senior_phone: string;
          senior_email?: string | null;
          senior_address: string;
          description: string;
          preferred_date: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          volunteer_id?: string;
          senior_name?: string;
          senior_phone?: string;
          senior_email?: string | null;
          senior_address?: string;
          description?: string;
          preferred_date?: string;
          status?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "help_requests_volunteer_id_fkey";
            columns: ["volunteer_id"];
            isOneToOne: false;
            referencedRelation: "volunteers";
            referencedColumns: ["id"];
          },
        ];
      };
      site_images: {
        Row: {
          id: string;
          bucket: string;
          path: string;
          section: string;
          alt_text: string | null;
          caption: string | null;
          width: number | null;
          height: number | null;
          sort_order: number;
          is_featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          bucket?: string;
          path: string;
          section: string;
          alt_text?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          sort_order?: number;
          is_featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          bucket?: string;
          path?: string;
          section?: string;
          alt_text?: string | null;
          caption?: string | null;
          width?: number | null;
          height?: number | null;
          sort_order?: number;
          is_featured?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
