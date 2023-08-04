import React from 'react';
import styled from 'styled-components';

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
    cursor: pointer;
    padding: 8px;
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
      </div>
    </StyledSidebar>
  );
};
export default Sidebar;
