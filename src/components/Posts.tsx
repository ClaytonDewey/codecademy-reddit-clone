import React from 'react';
import Post from './Post';

type PostsProps = {};

const Posts: React.FC<PostsProps> = () => {
  return (
    <div>
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default Posts;
