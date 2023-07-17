import GlobalStyle from '../theme/global';
import '../theme/main.scss';
import Header from './Header';
import PageContent from './PageContent';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <PageContent />
    </div>
  );
};
export default App;
