import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../styles/themes/dark';
import ligth from '../styles/themes/light';
import usePersistedState from '../services/usePersistedState';
import { MyContext } from './MyContext';
import { IUser } from '../interfaces/IUser';
import { createOptionsRequest } from '../services/createOptionsRequest';
import { requestAPI } from '../services/requestAPI';

interface Props {
  children: React.ReactNode
}

const MyProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', ligth);
  
  const toggleTheme = () => {    
    setTheme(theme.title === 'light' ? dark : ligth);
  };
  
  const [profileInfo, setProfileInfo] = useState<IUser[]>([]);
  
  const getProfileInfo = async (username: string) => {
    const fetchRoute = username === undefined ? 'users/me' : `users/${username}`;
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, fetchRoute, {authorization: `Bearer ${token}`});
    const response = await requestAPI(options);
    setProfileInfo([response.data as IUser]);
  }; 
  
  const [profileImg, setProfileImg] = useState<string>('');

  const getProfileImg = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'auth/me', {authorization: `Bearer ${token}`});
    const response = await requestAPI<IUser>(options);
    setProfileImg(response.data.imageUrl);
  };

  const state = {
    theme,
    toggleTheme,
    profileInfo,
    getProfileInfo,
    profileImg,
    getProfileImg,
  };

  return (
    <MyContext.Provider value={ state }>
      { children }
    </MyContext.Provider>
  );
};

export default MyProvider;