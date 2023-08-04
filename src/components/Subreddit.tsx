import React from 'react';
import styled from 'styled-components';
import icon from '../assets/subRedditIcon.png';

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
`;

const Subreddit: React.FC<SubredditProps> = () => {
  return (
    <StyledContainer>
      <StyledItem>
        <button>
          <img src={icon} alt='' className='icon' />
          <span>mildlyinfuriating</span>
        </button>
      </StyledItem>
      <StyledItem>
        <button>
          <img src={icon} alt='' className='icon' />
          <span>mildlyinfuriating</span>
        </button>
      </StyledItem>
    </StyledContainer>
  );
};
export default Subreddit;
