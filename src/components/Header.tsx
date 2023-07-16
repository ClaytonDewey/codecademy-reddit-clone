import React from 'react';
import Nav from './Nav';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Nav />
      <h1 className='mx-auto text-center'>Reddit Clone</h1>
    </>
  );
};
export default Header;
