import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { GlobalStyle } from './styles/global';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IContext, MyContext } from './context/MyContext';
import Feed from './pages/Feed';
import Home from './pages/Home';

function App() {
  const { theme } = useContext(MyContext) as IContext;
  
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />
      </Routes>  
    </ThemeProvider>    
  );
}

export default App;
  