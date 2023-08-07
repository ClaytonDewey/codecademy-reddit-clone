import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchSubreddits, selectSubreddits } from '../store/subRedditslice';
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../store/redditSlice';

const StyledDropdown = styled.select`
  /* border: none; */
  background: var(--color-branding-transparent);
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

type DropDownProps = {};

const DropDown: React.FC<DropDownProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const handleChange = (e) => {
    console.log(selectedSubreddit, e.target.value);
  };

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  console.log(subreddits);
  return (
    <StyledDropdown onChange={handleChange}>
      {subreddits.map((subreddit) => {
        return <option key={subreddit.id}>{subreddit.display_name}</option>;
      })}
    </StyledDropdown>
  );
};
export default DropDown;
