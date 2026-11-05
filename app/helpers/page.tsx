import { getSupabase } from "@/lib/supabase";
import { PUBLIC_VOLUNTEER_COLUMNS, PublicVolunteer } from "@/lib/types";
import HelpersClient from "./helpers-client";

export const dynamic = "force-dynamic";

export default async function HelpersPage() {
  const { data } = await getSupabase()
    .from("volunteers")
    .select(PUBLIC_VOLUNTEER_COLUMNS)
    .order("created_at", { ascending: false });

  const volunteers = (data as PublicVolunteer[] | null) ?? [];

  return <HelpersClient volunteers={volunteers} />;
}
