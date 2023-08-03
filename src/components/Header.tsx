import React from 'react';
import styled from 'styled-components';
import redditFace from '../images/redditFace.svg';
import redditText from '../images/redditText.svg';
import { FaSearch } from 'react-icons/fa';

const StyledHeader = styled.header`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--spacing-2);
  align-content: center;
  color: var(--color-branding);
  background: var(--color-foreground);
  box-shadow: var(--box-shadow);
  height: 64px;
  padding: 0 var(--spacing-5);

  .logo {
    display: flex;
    align-items: center;
    width: 4rem;
    margin-right: 2rem;
  }

  .search {
    display: flex;
    align-items: center;
  }

  .search input {
    flex-grow: 1;
    background: var(--color-background-secondary);
    border: none;
    padding: var(--spacing-1) var(--spacing-2);
    height: max-content;
    border-radius: var(--radius);
  }

  .search button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    font-size: 1.5rem;
  }
`;
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <div className='logo'>
        <img src={redditFace} height='30px' alt='logo' role='presentation' />
        <img src={redditText} height='46px' alt='reddit' role='presentation' />
      </div>
      <form className='search'>
        <input type='text' placeholder='Search' aria-label='Search Posts' />
        <button type='submit' aria-label='Search'>
          <FaSearch />
        </button>
      </form>
    </StyledHeader>
  );
};
export default Header;
