import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogCard } from './BlogCard';

// Latest three articles, shown on the home page
export const BlogPreviewSection: React.FC = () => (
  <section id="blog" className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
        <div>
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            FROM THE LINEUP
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            Guides to surfing Weligama and Sri Lanka's south coast
          </p>
        </div>
        <Link
          to="/blog"
          className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
        >
          Read all articles <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  </section>
);
