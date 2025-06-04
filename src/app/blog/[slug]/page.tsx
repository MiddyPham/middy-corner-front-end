import React from 'react';
import { PostContainer, PostHeader, PostTitle, PostMeta, PostDate, PostAuthor, PostContent, PostImage } from './postStyle';
import CommentSection from '@/components/CommentSection';

interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  author: {
    name: string;
    avatar?: string;
  };
}

async function getPost(slug: string): Promise<Post> {
  // TODO: Implement API call to get post data
  return {
    id: '1',
    title: 'Sample Post Title',
    content: 'This is a sample post content...',
    createdAt: new Date().toISOString(),
    author: {
      name: 'John Doe'
    }
  };
}

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <PostContainer>
      <PostHeader>
        {post.imageUrl && <PostImage src={post.imageUrl} alt={post.title} />}
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <PostAuthor>
            {post.author.avatar && (
              <img src={post.author.avatar} alt={post.author.name} />
            )}
            <span>{post.author.name}</span>
          </PostAuthor>
          <PostDate>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </PostDate>
        </PostMeta>
      </PostHeader>

      <PostContent>
        {post.content}
      </PostContent>

      <CommentSection postId={post.id} />
    </PostContainer>
  );
}
