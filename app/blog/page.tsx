import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
}

function getAllPosts(): PostData[] {
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
          thumbnail:
            data.thumbnail ||
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
        };
      });

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export const metadata = {
  title: "最新情報・ブログ一覧 | Patisserie Fleur",
  description:
    "パティスリーフルールの最新のお知らせ、季節限定のメニュー情報、シェフのブログなどの一覧ページです。",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      {/* ページヘッダー（固定ヘッダー分の余白 + 上部装飾） */}
      <div className="pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-stone-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <span className="section-eyebrow">News &amp; Blog</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-4 mb-4">
            お知らせ・ブログ一覧
          </h1>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-xl">
            季節の限定ケーキの発売情報や、お店の営業に関するお知らせ、お菓子づくりの裏側などを発信しています。
          </p>
        </div>
      </div>

      {/* 記事一覧 */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16 sm:py-20">
        {posts.length === 0 ? (
          <p className="text-center text-stone-400 py-20">
            現在、投稿された記事はありません。
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col">
                {/* サムネイル */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden rounded-xl mb-5 img-zoom"
                >
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
                  <h2 className="text-stone-900 font-bold text-base tracking-wide leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 flex-grow mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary text-xs tracking-[0.15em] uppercase font-medium inline-flex items-center gap-1.5 group/link"
                  >
                    Read more
                    <svg
                      className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* トップへ戻る */}
        <div className="text-center pt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-primary tracking-[0.1em] transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
