import React from 'react';
import { PageHero } from '../components/PageHero';
import { BlogCard } from '../components/BlogCard';
import { CtaBanner } from '../components/CtaBanner';
import { BLOG_POSTS } from '../data/blogPosts';
import { IMAGES } from '../data/surfData';

export const BlogPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Guides • Surf tips • Sri Lanka"
      title="Blog"
      intro="Surfing Sri Lanka's south coast: when to come, which break suits your level, what to pack, and how to get more out of every session."
      image={IMAGES.blogHero}
      imageAlt="A surfer carrying a board along a jungle path down to the beach"
    />
    <section className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
            ALL ARTICLES
          </h2>
          <p className="font-sans-body text-xs sm:text-sm font-light text-[#6b6255] mt-2">
            {BLOG_POSTS.length} articles from the Soul Surfer team
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
    <CtaBanner />
  </>
);
