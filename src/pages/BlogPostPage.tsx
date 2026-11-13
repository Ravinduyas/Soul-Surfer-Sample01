import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/blogPosts';
import { photo } from '../data/surfData';
import { BlogBlock } from '../types';
import { BlogCard, formatDate } from '../components/BlogCard';
import { CtaBanner } from '../components/CtaBanner';
import { NotFoundPage } from './NotFoundPage';

const Block: React.FC<{ block: BlogBlock; first: boolean }> = ({ block, first }) => {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-light tracking-wide text-[#2a362a] pt-6">
          {block.text}
        </h2>
      );
    case 'quote':
      return (
        <blockquote className="font-serif-cormorant text-xl text-[#2a362a] italic border-l-2 border-[#2a362a] pl-4">
          {block.text}
        </blockquote>
      );
    case 'list':
      return (
        <ul className="list-disc pl-5 space-y-2 marker:text-[#2a362a]/50">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p className={first ? 'text-base sm:text-lg text-[#3d372e]' : ''}>{block.text}</p>;
  }
};

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* ARTICLE HEADER */}
      <section className="relative w-full min-h-[46vh] sm:min-h-[52vh] flex flex-col justify-end overflow-hidden rounded-[2.5rem] bg-[#1e271e] text-white my-2 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={photo(post.image)} alt={post.title} className="w-full h-full object-cover object-center filter brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b231b]/90 via-black/30 to-black/30" />
        </div>
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14 pt-24 max-w-4xl space-y-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[0.625rem] sm:text-xs font-sans-body uppercase tracking-[0.3em] text-white/70 hover:text-white">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to the blog
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.06em] text-white drop-shadow-lg leading-tight"
          >
            {post.title}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-sans-body text-white/80">
            <span className="uppercase tracking-[0.2em]">{post.category}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl">
        <div className="max-w-3xl mx-auto space-y-5 font-sans-body text-sm sm:text-[0.95rem] font-light leading-[1.85] text-[#4a443b]">
          {post.blocks.map((block, idx) => (
            <Block key={idx} block={block} first={idx === 0} />
          ))}
        </div>
      </article>

      {/* KEEP READING */}
      <section className="relative w-full rounded-[2.5rem] bg-[#f4efe6] text-[#3d372e] p-8 sm:p-12 md:p-16 my-6 shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl font-light tracking-[0.16em] uppercase text-[#3d372e]">
              KEEP READING
            </h2>
            <Link
              to="/blog"
              className="w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 hover:border-[#2a362a] pb-1 transition-colors"
            >
              All articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="READY TO RIDE?" text="Book your surf experience at Soul Surfer Camp - 20 seconds from the beach in Weligama." />
    </>
  );
};
