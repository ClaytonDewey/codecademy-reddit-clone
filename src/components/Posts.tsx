import React from 'react';
import Post from './Post';
import { styled } from 'styled-components';

type PostsProps = {};

const StyledPostsWrapper = styled.div`
  min-width: 0;
  width: 100%;

  @media screen and (min-width: 640px) {
    width: 640px;
  }
`;

const Posts: React.FC<PostsProps> = () => {
  return (
    <StyledPostsWrapper>
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
      <Post />
    </StyledPostsWrapper>
  );
};
export default Posts;
