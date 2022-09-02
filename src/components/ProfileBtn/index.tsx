import { useEffect, useState } from 'react';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

function ProfileBtn() {
  const [profileImg, setProfileImg] = useState<string>('');
  const getProfilePhoto = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'auth/me', {authorization: `Bearer ${token}`});
    const response = await requestAPI<IUser>(options);
    setProfileImg(response.data.imageUrl);
  };
  useEffect(() => {
    getProfilePhoto();
  }, []);
  return (
    <img 
      src={profileImg}
      style={{width: '100px'}}
    />
  );
}

export default ProfileBtn;