import React, { useEffect } from 'react';
import styled from 'styled-components';
import icon from '../assets/subRedditIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { useAppSelector } from '../hooks';
import { fetchSubreddits, selectSubreddits } from '../store/subRedditslice';
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../store/redditSlice';

type SubredditProps = {};

const StyledContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledItem = styled.li`
  button {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    color: var(--color-text-body);
    padding: var(--spacing-1);
    border: none;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;
    width: 100%;

    &:hover {
      opacity: 0.75;
    }
  }

  .icon {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: var(--spacing-1);
    border: 3px solid;
    box-sizing: content-box;
  }

  &.active {
    background-color: var(--color-branding-transparent);
    border-left: 3px solid;
  }
`;

const Subreddit: React.FC<SubredditProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <StyledContainer>
      {subreddits.map((subreddit) => {
        return (
          <StyledItem
            key={subreddit.id}
            className={`${selectedSubreddit === subreddit.url && `active`}`}>
            <button
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={subreddit.display_name}
                style={{ border: `3px solid ${subreddit.primary_color}` }}
                className='icon'
              />
              <span>{subreddit.display_name}</span>
            </button>
          </StyledItem>
        );
      })}
    </StyledContainer>
  );
};
export default Subreddit;
