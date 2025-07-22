/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from 'react';
import { CommentContainer, CommentHeader, CommentContent, CommentAuthor, CommentDate, CommentText, NoComments } from './commentListStyle';
import Image from "next/image";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    avatar?: string;
  };
}

interface CommentListProps {
  postId: string;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch {
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (comments.length === 0) {
    return <NoComments>No comments yet. Be the first to comment!</NoComments>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentHeader>
            <CommentAuthor>
              {comment.author.avatar && (
                <Image width={40} height={40} src={comment.author.avatar} alt={comment.author.name} />
              )}
              <span>{comment.author.name}</span>
            </CommentAuthor>
            <CommentDate>
              {new Date(comment.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </CommentDate>
          </CommentHeader>
          <CommentContent>
            <CommentText>{comment.content}</CommentText>
          </CommentContent>
        </CommentContainer>
      ))}
    </div>
  );
};

export default CommentList; 