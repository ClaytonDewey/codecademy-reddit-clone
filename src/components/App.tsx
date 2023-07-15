import GlobalStyle from '../theme/global';
import Header from './Header';
import Posts from './Posts';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <h1>Reddit Clone</h1>
      <Header />
      <Posts />
      <Sidebar />
    </div>
  );
}

export default App;
