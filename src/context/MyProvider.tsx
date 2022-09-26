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
  
  const [profileInfo, setProfileInfo] = useState<IUser>();
  const getProfileInfo = async (username: string | undefined) => {
    try {
      const fetchRoute = username === undefined ? 'users/me' : `users/${username}`;
      const token = localStorage.getItem('authTekurt');
      const options = createOptionsRequest('GET', {}, fetchRoute, {authorization: `Bearer ${token}`});
      const response = await requestAPI<IUser>(options);
      setProfileInfo(response.data);
    } catch(err: any) {
      throw err.data;
    }
  }; 
  
  const [profileImg, setProfileImg] = useState<IUser>();

  const getProfileImg = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'auth/me', {authorization: `Bearer ${token}`});
    const response = await requestAPI<IUser>(options);
    setProfileImg(response.data);
  };

  const [editingProfile, setEditingProfile] = useState<boolean>(false);
  const [changePhoto, setChangePhoto] = useState<boolean>(false);

  const state = {
    theme,
    toggleTheme,
    profileInfo,
    getProfileInfo,
    profileImg,
    getProfileImg,
    editingProfile,
    setEditingProfile,
    changePhoto,
    setChangePhoto,
  };

  return (
    <MyContext.Provider value={ state }>
      { children }
    </MyContext.Provider>
  );
};

export default MyProvider;