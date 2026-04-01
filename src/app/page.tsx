import Link from "next/link";
import { posts } from "@/data/posts";
import { img } from "@/lib/prefix";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Posts */}
        <div className="md:col-span-2 space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-border pb-10">
              <Link href={`/${post.slug}`}>
                <div className="relative w-full aspect-[21/9] mb-4 overflow-hidden rounded">
                  <img
                    src={img(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="text-xs text-muted mb-2">
                {post.categories.map((cat, i) => (
                  <span key={cat}>
                    {i > 0 && ", "}
                    <span className="text-gold">{cat}</span>
                  </span>
                ))}
              </div>
              <Link href={`/${post.slug}`}>
                <h2
                  className="text-2xl mb-2 hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  {post.title}
                </h2>
              </Link>
              <p className="text-xs text-muted mb-3">
                {post.date} / by {post.author}
              </p>
              <p className="text-sm text-muted leading-relaxed line-clamp-3">
                {post.content.replace(/\*\*/g, "").replace(/###?\s/g, "").slice(0, 200)}...
              </p>
              <Link
                href={`/${post.slug}`}
                className="inline-block mt-3 text-gold text-sm hover:text-gold-light transition-colors"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-surface rounded-lg p-6 text-center">
            <h3 className="text-gold text-lg mb-2" style={{ fontFamily: "var(--font-lora)" }}>
              Come dream with me
            </h3>
            <p className="text-sm text-muted italic mb-4">
              Friends, these are my words — Rants, fables, lies and ample truths reside here
            </p>
            <img
              src={img("/images/desert-dreaming.jpg")}
              alt="Desert dreaming"
              className="rounded mb-4 mx-auto max-w-full"
            />
            <img
              src={img("/images/signature.png")}
              alt="Signature"
              className="mx-auto"
              width={150}
            />
          </div>

          <div>
            <h3 className="text-gold text-sm font-bold uppercase tracking-wider mb-3">
              Categories
            </h3>
            <ul className="space-y-1 text-sm text-muted">
              {[
                "Artificial Intelligence", "Audio", "Cock & Bull", "Lists",
                "Poetry", "Smash the Predator Class", "Stories", "Tales",
                "The Old Days", "Yarns",
              ].map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
