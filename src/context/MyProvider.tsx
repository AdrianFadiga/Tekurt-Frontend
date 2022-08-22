import React from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../styles/themes/dark';
import ligth from '../styles/themes/light';
import usePersistedState from '../utils/usePersistedState';
import { MyContext } from './MyContext';

interface Props {
  children: React.ReactNode
}

const MyProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', ligth);  

  const toggleTheme = () => {    
    setTheme(theme.title === 'light' ? dark : ligth);
  };

  const state = {
    theme,
    toggleTheme
  };

  return (
    <MyContext.Provider value={ state }>
      { children }
    </MyContext.Provider>
  );
};

export default MyProvider;