import { NextResponse } from 'next/server';

// Mock data for blog posts
const posts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    date: '2024-03-20',
    imageUrl: 'https://picsum.photos/800/400',
    slug: 'getting-started-with-nextjs'
  },
  {
    id: '2',
    title: 'Understanding React Hooks',
    excerpt: 'A comprehensive guide to React Hooks and their use cases',
    date: '2024-03-19',
    imageUrl: 'https://picsum.photos/800/401',
    slug: 'understanding-react-hooks'
  },
  {
    id: '3',
    title: 'Styling in Next.js',
    excerpt: 'Different approaches to styling your Next.js applications',
    date: '2024-03-18',
    imageUrl: 'https://picsum.photos/800/402',
    slug: 'styling-in-nextjs'
  }
];

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return NextResponse.json(posts);
} 