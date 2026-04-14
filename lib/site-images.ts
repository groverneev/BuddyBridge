import { getSupabase } from "@/lib/supabase";
import { SiteImage, SiteImageWithUrl } from "@/lib/types";

function addPublicUrl(image: SiteImage): SiteImageWithUrl {
  const { data } = getSupabase().storage.from(image.bucket).getPublicUrl(image.path);

  return {
    ...image,
    url: data.publicUrl,
  };
}

export async function getSiteImages(section: SiteImage["section"]): Promise<SiteImageWithUrl[]> {
  const { data, error } = await getSupabase()
    .from("site_images")
    .select("*")
    .eq("section", section)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to load site images for ${section}.`);
  }

  return ((data as SiteImage[]) ?? []).map(addPublicUrl);
}

export async function getHomepageHeroImage(): Promise<SiteImageWithUrl | null> {
  const { data, error } = await getSupabase()
    .from("site_images")
    .select("*")
    .or("section.eq.homepage,section.eq.pilot")
    .order("is_featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error("Failed to load homepage hero image.");
  }

  return data ? addPublicUrl(data as SiteImage) : null;
}
