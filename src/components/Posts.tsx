import React, { useEffect } from 'react';
import Post from './Post';
import PostLoading from './PostLoading';
import { AnimatedList } from 'react-animated-list';
import getRandomNumber from '../utils/getRandomNumber';
import {
  fetchPosts,
  selectFilteredPosts,
  // setSearchTerm,
  // fetchComments,
} from '../store/redditSlice';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { useAppSelector } from '../hooks';
import { PostObj } from '../types';

type PostsProps = {};

const StyledPostsWrapper = styled.section`
  min-width: 0;
  width: 100%;

  @media screen and (min-width: 960px) {
    width: 640px;
  }
`;

const Posts: React.FC<PostsProps> = () => {
  const reddit = useAppSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  // const onToggleComments = (index: number) => {
  //   const getComments = (link: string) => {
  //     dispatch(fetchComments(index, link));
  //   };

  //   return getComments;
  // };

  if (isLoading) {
    return (
      <StyledPostsWrapper>
        <AnimatedList animation='zoom'>
          {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
        </AnimatedList>
      </StyledPostsWrapper>
    );
  }

  if (error) {
    return <p>Failed to load posts.</p>;
  }

  if (posts.length === 0) {
    return <p>No posts matching "{searchTerm}"</p>;
  }

  return (
    <StyledPostsWrapper>
      {posts.map((post: PostObj, index: number) => {
        return (
          <Post
            key={post.id}
            post={post}
            // onToggleComments={onToggleComments(index)}
          />
        );
      })}
    </StyledPostsWrapper>
  );
};
export default Posts;
