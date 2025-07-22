'use client'

import React from 'react';
import Link from 'next/link';
import { CardContainer, CardImage, CardContent, CardTitle, CardExcerpt, CardMeta, CardDate, CardReadMore } from './blogCardStyle';

interface BlogCardProps {
  id?: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, imageUrl, slug }) => {
   return (
    <CardContainer>
      {imageUrl && (
        <Link href={`/blog/${slug}`}>
          <CardImage src={imageUrl} alt={title} />
        </Link>
      )}
      <CardContent>
        <CardTitle>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
        <CardExcerpt>{excerpt}</CardExcerpt>
        <CardMeta>
          <CardDate>{new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</CardDate>
          <CardReadMore href={`/blog/${slug}`}>
            Read More
          </CardReadMore>
        </CardMeta>
      </CardContent>
    </CardContainer>
  );
};

export default BlogCard;
