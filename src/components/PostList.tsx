// components/PostList.tsx
import React from 'react';
import { Post as PostType } from '../types/post';
import Post from './Post';

interface PostListProps {
    posts: PostType[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
    <div>
        {posts.map((post) => (
            <Post key={post.id} post={post} />
        ))}
    </div>
);

export default PostList;
