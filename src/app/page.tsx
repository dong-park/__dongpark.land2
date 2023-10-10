// pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import {Post as PostType} from '../types/post';

const posts: PostType[] = [
    {id: 1, title: 'Post 1', content: 'Content of post 1'},
    {id: 2, title: 'Post 2', content: 'Content of post 2'},
    {id: 3, title: 'Post 3', content: 'Content of post 3'},
];

const Home: React.FC = () => (
    <div>
        <h1>Welcome to My Blog</h1>
        <PostList posts={posts}/>
    </div>
);

export default Home;
