'use client'
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { BlogGrid, BlogListContainer } from "./blogStyle";
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #dc2626;
  text-align: center;
  padding: 1rem;
`;

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  slug: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        Loading blog posts...
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <div>
          <h2>Error loading posts</h2>
          <p>{error}</p>
          <button onClick={fetchPosts}>Try again</button>
        </div>
      </ErrorContainer>
    );
  }

  return (
    <BlogListContainer>
      <h1>Blog Posts</h1>
      <BlogGrid>
        {posts.map(post => (
          <BlogCard 
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            imageUrl={post.imageUrl}
            slug={post.slug}
          />
        ))}
      </BlogGrid>
    </BlogListContainer>
  );
}
