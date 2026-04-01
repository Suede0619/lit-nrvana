import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import { img } from "@/lib/prefix";
import { slugify } from "@/lib/categories";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Nrvana Literature`,
    description: post.content.slice(0, 160),
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const renderContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("### ")) {
        return <h3 key={i} className="text-lg font-bold mt-6 mb-2">{line.replace("### ", "")}</h3>;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} className="font-bold mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>;
      }
      if (line.startsWith("**")) {
        const parts = line.split("**");
        return (
          <p key={i} className="mb-1">
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j}>{part}</strong> : part
            )}
          </p>
        );
      }
      if (line === "---") {
        return <hr key={i} className="my-6 border-border" />;
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="ml-4 mb-1">{line.replace("- ", "")}</li>;
      }
      if (/^\d+\)/.test(line)) {
        return <p key={i} className="ml-4 mb-1">{line}</p>;
      }
      if (line === "") {
        return <br key={i} />;
      }
      return <p key={i} className="mb-1">{line}</p>;
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-gold text-sm hover:text-gold-light mb-6 inline-block">
        &larr; Back to all posts
      </Link>

      <div className="w-full aspect-[21/9] mb-6 overflow-hidden rounded">
        <img
          src={img(post.image)}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-xs text-muted mb-2">
        {post.categories.map((cat, i) => (
          <span key={cat}>
            {i > 0 && ", "}
            <Link href={`/category/${slugify(cat)}`} className="text-gold hover:text-gold-light">{cat}</Link>
          </span>
        ))}
      </div>

      <h1
        className="text-3xl md:text-4xl mb-3"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        {post.title}
      </h1>

      <p className="text-xs text-muted mb-8">
        {post.date} / by {post.author}
      </p>

      <div
        className="prose text-foreground leading-relaxed text-base"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        {renderContent(post.content)}
      </div>

      {post.gallery && (
        <div className="mt-12">
          <h2 className="text-xl mb-4" style={{ fontFamily: "var(--font-lora)" }}>
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {post.gallery.map((photo) => (
              <div key={photo} className="aspect-[4/3] overflow-hidden rounded">
                <img
                  src={img(`/images/annapurna/${photo}.jpg`)}
                  alt={`Annapurna trek ${photo}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <span className="text-xs text-muted">Tags: </span>
          {post.tags.map((tag, i) => (
            <span key={tag} className="text-xs text-gold">
              {i > 0 && ", "}
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
