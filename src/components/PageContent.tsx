import styled from 'styled-components';
import Posts from './Posts';
import Sidebar from './Sidebar';

const StyledContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  width: 95%;
  max-width: 86rem;
  margin: auto;
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
