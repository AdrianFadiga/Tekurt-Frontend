import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { GlobalStyle } from './styles/global';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IContext, MyContext } from './context/MyContext';
import Search from './pages/Search';
import Bio from './pages/Bio';
import Friends from './pages/Friends';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

function App() {
  const { theme } = useContext(MyContext) as IContext;
  
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={<Bio />} />
        <Route path="/user/:username" element={<Bio />} />
        <Route path="/search/:searchValue" element={<Search />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friends/:username" element={<Friends />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:username" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
    </ThemeProvider>    
  );
}

export default App;
  