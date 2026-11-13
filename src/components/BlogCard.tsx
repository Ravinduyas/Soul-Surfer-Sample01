import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../types';
import { photo } from '../data/surfData';

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="bg-[#e9e2d4] border border-[#dcd4c4] hover:border-[#2a362a]/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg group"
  >
    <div className="aspect-[16/10] overflow-hidden bg-[#1e271e]">
      <img
        src={photo(post.image)}
        alt={post.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-[0.625rem] font-sans-body uppercase tracking-[0.2em] text-[#6b6255] font-medium">
        {post.category} · {formatDate(post.date)}
      </span>
      <h3 className="font-serif-cormorant text-2xl font-normal tracking-wide text-[#2a362a] mt-2 mb-3 leading-snug">
        {post.title}
      </h3>
      <p className="font-sans-body text-xs font-light leading-relaxed text-[#5c5448] line-clamp-3 flex-1">
        {post.excerpt}
      </p>
      <span className="mt-5 w-fit flex items-center gap-2 text-xs font-sans-body uppercase tracking-[0.2em] text-[#2a362a] border-b border-[#2a362a]/40 group-hover:border-[#2a362a] pb-1 transition-colors">
        Read more <ArrowUpRight className="w-3.5 h-3.5" />
      </span>
    </div>
  </Link>
);
