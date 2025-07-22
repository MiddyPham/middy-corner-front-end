'use client'
import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import AuthButtons from '../AuthButtons';
import { useAuth } from '@/hooks/useAuth';

export default function CommentSection({ postId }: { postId: string }) {
  const { isAuthenticated } = useAuth();
  
  return (
    <div>
      {isAuthenticated() ? (
        <CommentForm postId={postId} />
      ) : (
        <div>
          <p>Please login to comment</p>
          <AuthButtons />
        </div>
      )}
      <CommentList postId={postId} />
    </div>
  );
}
