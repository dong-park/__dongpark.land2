// components/Post.tsx
import React from 'react';
import { Post as PostType } from '../types/post';

interface PostProps {
    post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </div>
);

export default Post;
