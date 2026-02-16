export const CATEGORIES = [
  { id: "tech", label: "Tech Help", emoji: "💻" },
  { id: "household", label: "Household Tasks", emoji: "🏠" },
  { id: "errands", label: "Errands & Transport", emoji: "🚗" },
  { id: "companionship", label: "Companionship", emoji: "☕" },
  { id: "paperwork", label: "Paperwork & Forms", emoji: "📋" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export function getCategoryLabel(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
