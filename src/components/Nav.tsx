import React from 'react';

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>somewhere</a>
        </li>
        <li>
          <a href='/'>somewhere else</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
