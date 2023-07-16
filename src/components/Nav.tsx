import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  background-color: var(--white);
  height: 4.4rem;
  padding: 6px 12px;

  ul {
    list-style: none;
    display: flex;

    a {
      padding: 0 1rem;
    }
  }

  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
`;

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href='/'>somewhere</a>
        </li>
        <li>
          <a href='/'>somewhere else</a>
        </li>
      </ul>
    </StyledNav>
  );
};
export default Nav;
