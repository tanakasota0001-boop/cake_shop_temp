import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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
          thumbnail: data.thumbnail || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
        };
      });

    // 最新日付順にソート
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export const metadata = {
  title: "最新情報・ブログ一覧 | Patisserie Fleur",
  description: "パティスリーフルールの最新のお知らせ、季節限定のメニュー情報、シェフのブログなどの一覧ページです。",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="pt-20 py-16 sm:py-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ページヘッダー */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            News & Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-850 tracking-wider">
            お知らせ・ブログ一覧
          </h1>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            季節の限定ケーキの発売情報や、お店の営業に関するお知らせ、お菓子づくりの裏側などを発信しています。
          </p>
        </div>

        {/* 記事一覧 */}
        {posts.length === 0 ? (
          <p className="text-center text-stone-500 py-12">現在、投稿された記事はありません。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full bg-white">
                {/* サムネイル */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                {/* テキストコンテンツ */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-stone-400 text-xs tracking-wider block">
                      {post.date.replace(/-/g, ".")}
                    </span>
                    <h2 className="text-lg font-bold text-stone-850 hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-accent font-semibold text-sm tracking-wider inline-flex items-center group transition-colors"
                    >
                      詳しく読む
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* トップへ戻る */}
        <div className="text-center pt-8">
          <Link href="/">
            <Button variant="outline">
              トップページに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
