import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Login from './pages/Login';
import { GlobalStyle } from './styles/global';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IContext, MyContext } from './context/MyContext';
import Home from './pages/Home';
import Search from './pages/Search';
import Bio from './pages/Bio';
// import store from './redux/store';

function App() {
  const { theme } = useContext(MyContext) as IContext;
  
  return (
    // <Provider store={store}>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:username" element={<Bio />} />
        <Route path="/search/:searchValue" element={<Search />} />
      </Routes>  
    </ThemeProvider>    
    // </Provider>
  );
}

export default App;
  