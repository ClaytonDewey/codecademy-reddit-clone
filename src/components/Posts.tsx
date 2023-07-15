import React from 'react';
import Post from './Post';

type PostsProps = {};

const Posts: React.FC<PostsProps> = () => {
  return (
    <>
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};
export default Posts;
