import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { GlobalStyle } from './styles/global';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IContext, MyContext } from './context/MyContext';

function App() {
  const { theme } = useContext(MyContext) as IContext;
  
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>  
    </ThemeProvider>    
  );
}

export default App;
