import React from 'react';
import styled from 'styled-components';
import Subreddit from './Subreddit';
import BackTopButton from './BackTopButton';

type SidebarProps = {};

const StyledSidebar = styled.aside`
  display: none;
  flex: 0 0 312px;
  width: 312px;
  margin-left: var(--spacing-3);

  .card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    padding: 8px;

    h2 {
      margin-bottom: var(--spacing-2);
    }
  }

  @media screen and (min-width: 960px) {
    display: block;
  }
`;

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <StyledSidebar>
      <div className='card'>
        <h2>Subreddits</h2>
        <Subreddit />
      </div>

      <BackTopButton />
    </StyledSidebar>
  );
};
export default Sidebar;
