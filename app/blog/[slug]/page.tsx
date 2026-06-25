import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";

interface PostParams {
  params: Promise<{
    slug: string;
  }>;
}

// 静的パスの事前生成 (SSG)
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];

  const filenames = fs.readdirSync(blogDir);
  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

// 動的メタデータの生成
export async function generateMetadata({ params }: PostParams) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "記事が見つかりません | Patisserie Fleur",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | Patisserie Fleur`,
    description: data.excerpt || "パティスリーフルールのブログ記事詳細です。",
    openGraph: {
      title: data.title,
      description: data.excerpt,
      images: [
        {
          url: data.thumbnail || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
  };
}

export default async function BlogPostDetail({ params }: PostParams) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // MarkdownをHTMLに変換
  // marked がPromiseを返すかシンクロナスかで呼び出しを分ける。
  // marked v4/v5以降は同期呼び出しの marked.parse もしくは marked() が使える。
  const htmlContent = marked(content);

  return (
    <article className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#fdfbf7] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-10">
        {/* 一覧に戻るリンク */}
        <div className="text-left">
          <Link
            href="/blog"
            className="text-stone-400 hover:text-primary text-sm font-semibold tracking-wider inline-flex items-center group transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            一覧に戻る
          </Link>
        </div>

        {/* 記事ヘッダー */}
        <div className="space-y-4 border-b border-stone-100 pb-8">
          <span className="text-stone-400 text-sm tracking-wider block">
            {data.date ? data.date.replace(/-/g, ".") : "2026.06.21"}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-850 leading-tight tracking-wide">
            {data.title}
          </h1>
          {data.excerpt && (
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed border-l-4 border-primary/40 pl-4 py-1 italic">
              {data.excerpt}
            </p>
          )}
        </div>

        {/* アイキャッチ画像 */}
        {data.thumbnail && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm bg-stone-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 記事本文 */}
        <div
          className="blog-content text-stone-700 leading-relaxed text-base sm:text-lg space-y-6 pt-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* 下部ボタン */}
        <div className="text-center pt-12 border-t border-stone-100">
          <Link href="/blog">
            <Button variant="outline" className="px-8">
              ブログ一覧に戻る
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
