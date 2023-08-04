import styled from 'styled-components';
import Posts from './Posts';
import Sidebar from './Sidebar';

const StyledContainer = styled.main`
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1248px;
  padding: 20px 0;

  @media screen and (min-width: 960px) {
    padding: 20px 24px;
  }
`;

type PageContentProps = {};

const PageContent: React.FC<PageContentProps> = () => {
  return (
    <StyledContainer>
      <Posts />
      <Sidebar />
    </StyledContainer>
  );
};
export default PageContent;
