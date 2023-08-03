import React from 'react';
import styled from 'styled-components';

type SidebarProps = {};

const StyledSidebar = styled.div`
  display: none;
  flex: 0 0 312px;
  width: 312px;
  margin-left: var(--spacing-3);

  @media screen and (min-width: 960px) {
    display: block;
  }
`;

const Sidebar: React.FC<SidebarProps> = () => {
  return <StyledSidebar>I am the sidebar</StyledSidebar>;
};
export default Sidebar;
