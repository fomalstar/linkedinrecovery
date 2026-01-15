import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | LinkedIn Recovery Tips & Guides",
  description:
    "Expert tips and guides on recovering restricted LinkedIn accounts. Learn about common restriction reasons, appeal strategies, and how to protect your account.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
              Knowledge Base
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              LinkedIn Recovery Blog
            </h1>
            <p className="text-lg text-gray-600">
              Expert insights on LinkedIn restrictions, appeals, and account recovery.
              Stay informed and protect your professional network.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200 bg-white">
                    <CardHeader className="pb-3">
                      {/* Keywords/Tags */}
                      {post.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.keywords.slice(0, 2).map((keyword) => (
                            <span
                              key={keyword}
                              className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help With Your Restricted Account?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team has helped recover hundreds of LinkedIn accounts.
            Get professional help today.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
