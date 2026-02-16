import { getSupabase } from "@/lib/supabase";
import { Volunteer } from "@/lib/types";
import HelpersClient from "./helpers-client";

export const dynamic = "force-dynamic";

export default async function HelpersPage() {
  const { data } = await getSupabase()
    .from("volunteers")
    .select("*")
    .order("created_at", { ascending: false });

  const volunteers = (data as Volunteer[]) ?? [];

  return <HelpersClient volunteers={volunteers} />;
}
