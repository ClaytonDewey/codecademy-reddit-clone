import styled from 'styled-components';
import redditFace from '../images/redditFace.svg';
import redditText from '../images/redditText.svg';

const StyledNav = styled.nav`
  display: flex;
  background-color: var(--white);
  height: 4.4rem;
  padding: 6px 12px;

  .logo-container {
    display: flex;
    align-items: center;
    width: 4rem;
    margin-right: 2rem;
  }
`;

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <StyledNav>
      <div className='logo-container'>
        <img src={redditFace} height='30px' alt='logo' role='presentation' />
        <img src={redditText} height='46px' alt='reddit' role='presentation' />
      </div>
    </StyledNav>
  );
};
export default Nav;
