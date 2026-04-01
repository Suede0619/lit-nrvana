import { posts } from "@/data/posts";

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  posts.forEach((p) => p.categories.forEach((c) => cats.add(c)));
  return Array.from(cats).sort();
}

export function slugify(cat: string): string {
  return cat.toLowerCase().replace(/[&]/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/-+$/,"");
}

export function getPostsByCategory(catSlug: string) {
  return posts.filter((p) =>
    p.categories.some((c) => slugify(c) === catSlug)
  );
}

export function categoryFromSlug(catSlug: string): string | undefined {
  const all = getAllCategories();
  return all.find((c) => slugify(c) === catSlug);
}
