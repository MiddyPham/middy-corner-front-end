'use client'
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FormContainer, TextArea, SubmitButton, ErrorMessage } from './commentFormStyle';

interface CommentFormProps {
  postId: string;
  onCommentAdded?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onCommentAdded }) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          content: content.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      setContent('');
      onCommentAdded?.();
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        rows={4}
        maxLength={1000}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton type="submit" disabled={isSubmitting || !content.trim()}>
        {isSubmitting ? 'Posting...' : 'Post Comment'}
      </SubmitButton>
    </FormContainer>
  );
};

export default CommentForm; 