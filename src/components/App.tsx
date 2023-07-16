import GlobalStyle from '../theme/global';
import '../theme/main.scss';
import Header from './Header';
import Posts from './Posts';
import Sidebar from './Sidebar';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Posts />
      <Sidebar />
    </div>
  );
};
export default App;
