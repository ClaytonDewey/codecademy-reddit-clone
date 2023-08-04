import React from 'react';
import Post from './Post';
import { styled } from 'styled-components';

type PostsProps = {};

const StyledPostsWrapper = styled.section`
  min-width: 0;
  width: 100%;

  @media screen and (min-width: 960px) {
    width: 640px;
  }
`;

const Posts: React.FC<PostsProps> = () => {
  return (
    <StyledPostsWrapper>
      <Post />
      <Post />
    </StyledPostsWrapper>
  );
};
export default Posts;
