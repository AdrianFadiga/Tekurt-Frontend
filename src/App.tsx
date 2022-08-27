import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Login from './pages/Login';
import { GlobalStyle } from './styles/global';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IContext, MyContext } from './context/MyContext';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Search from './pages/Search';
// import store from './redux/store';

function App() {
  const { theme } = useContext(MyContext) as IContext;
  
  return (
    // <Provider store={store}>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search/:searchValue" element={<Search />} />
      </Routes>  
    </ThemeProvider>    
    // </Provider>
  );
}

export default App;
  