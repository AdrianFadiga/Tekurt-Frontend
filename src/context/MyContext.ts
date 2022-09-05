import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { IUser } from '../interfaces/IUser';

export interface IContext {
  theme: DefaultTheme,
  toggleTheme(): void;
  profileInfo: IUser | undefined;
  getProfileInfo(username: string | undefined): void;
  profileImg: IUser | undefined;
  getProfileImg(): void;
}

export const MyContext = createContext<IContext | null>(null);