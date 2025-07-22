"use client";
import React from "react";
import {
  PostContainer,
  // PostHeader,
  // PostTitle,
  // PostMeta,
  // PostDate,
  // PostAuthor,
  // PostContent,
  // PostImage,
} from "./postStyle";
// import CommentSection from "@/components/CommentSection";
// import Image from "next/image";

// interface Post {
//   id: string;
//   title: string;
//   content: string;
//   imageUrl?: string;
//   createdAt: string;
//   author: {
//     name: string;
//     avatar?: string;
//   };
// }
export default function PostDetail() {
  return (
    <PostContainer>
      {/* <PostHeader>
        {post.imageUrl && <PostImage src={post.imageUrl} alt={post.title} />}
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <PostAuthor>
            {post.author.avatar && (
              <Image
                width={40}
                height={40}
                src={post.author.avatar}
                alt={post.author.name}
              />
            )}
            <span>{post.author.name}</span>
          </PostAuthor>
          <PostDate>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </PostDate>
        </PostMeta>
      </PostHeader>

      <PostContent>{post.content}</PostContent>

      <CommentSection postId={post.id} /> */}
    </PostContainer>
  );
}
