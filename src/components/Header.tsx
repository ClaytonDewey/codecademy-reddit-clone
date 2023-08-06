import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import redditFace from '../images/redditFace.svg';
import redditText from '../images/redditText.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { useAppSelector } from '../hooks';
import { setSearchTerm } from '../store/redditSlice';

const StyledHeader = styled.header`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--spacing-2);
  align-content: center;
  color: var(--color-branding);
  background: var(--color-foreground);
  box-shadow: var(--box-shadow);
  height: 49px;
  padding: 0 var(--spacing-3);

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

  form {
    position: relative;
  }

  .search input {
    flex-grow: 1;
    background: var(--color-background-secondary);
    border: none;
    padding: var(--spacing-1) var(--spacing-2) var(--spacing-1) 40px;
    /* height: max-content; */
    border-radius: 50px;
    height: 40px;
  }

  .search button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    font-size: 2rem;
    position: absolute;
    left: 1.5rem;
    top: 12px;
  }
`;
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useAppSelector((state) => state.reddit.searchTerm);
  const dispatch: AppDispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <StyledHeader>
      <div className='logo'>
        <img src={redditFace} height='30px' alt='logo' role='presentation' />
        <img src={redditText} height='46px' alt='reddit' role='presentation' />
      </div>
      <form className='search' onSubmit={onSubmitSearch}>
        <input
          type='text'
          value={searchTermLocal}
          onChange={onSearchTermChange}
          placeholder='Search'
          aria-label='Search Posts'
        />
        <button type='submit' onClick={onSubmitSearch} aria-label='Search'>
          <AiOutlineSearch />
        </button>
      </form>
    </StyledHeader>
  );
};
export default Header;
