import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Button from "@/components/ui/Button";

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
}

function getLatestPosts(): PostData[] {
  try {
    const blogDir = path.join(process.cwd(), "content/blog");
    if (!fs.existsSync(blogDir)) {
      return [];
    }

    const filenames = fs.readdirSync(blogDir);
    const posts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(blogDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        const slug = filename.replace(/\.md$/, "");

        return {
          slug,
          title: data.title || "無題の記事",
          date: data.date || "2026-06-21",
          excerpt: data.excerpt || "",
          thumbnail: data.thumbnail || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
        };
      });

    return posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  } catch (error) {
    console.error("Error reading latest posts:", error);
    return [];
  }
}

export const LatestNews = () => {
  const latestPosts = getLatestPosts();

  return (
    <section id="news" className="py-28 sm:py-36 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* ヘッダー */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="section-eyebrow">News</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-3">
              最新情報・お知らせ
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-stone-500 hover:text-primary tracking-[0.1em] transition-colors hidden sm:flex items-center gap-1.5 group"
          >
            すべて見る
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 記事グリッド */}
        {latestPosts.length === 0 ? (
          <p className="text-center text-stone-400 py-12">現在、最新情報はありません。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {latestPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col">
                {/* サムネイル */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-xl mb-5 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* テキスト */}
                <div className="flex-grow flex flex-col">
                  <span className="text-stone-400 text-[0.65rem] tracking-[0.15em] uppercase block mb-2">
                    {post.date.replace(/-/g, ".")}
                  </span>
                  <h3 className="text-stone-900 font-bold text-base tracking-wide leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 flex-grow mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary text-xs tracking-[0.15em] uppercase font-medium inline-flex items-center gap-1.5 group/link"
                  >
                    Read more
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* モバイル用もっと見る */}
        <div className="text-center pt-10 sm:hidden">
          <Link href="/blog">
            <Button variant="outline" className="px-10 text-sm tracking-wider">
              すべて見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
