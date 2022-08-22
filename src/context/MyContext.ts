import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export interface IContext {
  theme: DefaultTheme,
  toggleTheme(): void;
}

export const MyContext = createContext<IContext | null>(null);