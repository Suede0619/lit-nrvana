import Link from "next/link";
import { getAllCategories, slugify, getPostsByCategory, categoryFromSlug } from "@/lib/categories";
import { notFound } from "next/navigation";
import { img } from "@/lib/prefix";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ cat: slugify(c) }));
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const name = categoryFromSlug(cat);
  if (!name) return { title: "Not Found" };
  return { title: `${name} | Nrvana Literature` };
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const name = categoryFromSlug(cat);
  if (!name) notFound();
  const filtered = getPostsByCategory(cat);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-gold text-sm hover:text-gold-light mb-6 inline-block">
        &larr; Back to all posts
      </Link>

      <h1 className="text-3xl mb-8" style={{ fontFamily: "var(--font-lora)" }}>
        {name}
      </h1>

      <div className="space-y-10">
        {filtered.map((post) => (
          <article key={post.slug} className="border-b border-border pb-8">
            <Link href={`/${post.slug}`}>
              <div className="w-full aspect-[21/9] mb-4 overflow-hidden rounded">
                <img
                  src={img(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="text-xs text-muted mb-2">
              {post.categories.map((c, i) => (
                <span key={c}>
                  {i > 0 && ", "}
                  <Link href={`/category/${slugify(c)}`} className="text-gold hover:text-gold-light">
                    {c}
                  </Link>
                </span>
              ))}
            </div>
            <Link href={`/${post.slug}`}>
              <h2 className="text-2xl mb-2 hover:text-gold transition-colors" style={{ fontFamily: "var(--font-lora)" }}>
                {post.title}
              </h2>
            </Link>
            <p className="text-xs text-muted mb-3">{post.date} / by {post.author}</p>
            <p className="text-sm text-muted leading-relaxed line-clamp-3">
              {post.content.replace(/\*\*/g, "").replace(/###?\s/g, "").slice(0, 200)}...
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
