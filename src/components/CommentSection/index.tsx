'use client'
import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import AuthButtons from '../AuthButtons';
import { useAuth } from '@/contexts/AuthContext';

export default function CommentSection({ postId }) {
  const { user, isAuthenticated } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
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
