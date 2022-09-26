import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { IUser } from '../interfaces/IUser';

export interface IContext {
  theme: DefaultTheme,
  toggleTheme(): void;
  profileInfo: IUser | undefined;
  getProfileInfo(username: string | undefined): Promise<void>;
  profileImg: IUser | undefined;
  getProfileImg(): void;
  editingProfile: boolean;
  setEditingProfile(bool: boolean): void
  changePhoto: boolean;
  setChangePhoto(bool: boolean): void

}

export const MyContext = createContext<IContext | null>(null);