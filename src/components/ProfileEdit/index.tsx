import { useState } from 'react';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { EditProfileContainerStyle } from './style';

interface Props {
    user: IUser
  }

const ProfileEdit: React.FC<Props> = ({user}) => {
  const [firstName, setName] = useState<string>(user.firstName);
  const [lastName, setLastname] = useState<string>(user.lastName);
  const [username, setUsername] = useState<string>(user.username);

  const isValidProfileInfo = () => {
    const validate = (
      firstName.length >= 3 &&
      firstName.length <= 15 &&
      lastName.length >= 3 &&
      lastName.length <= 20 &&
      username.length >= 3 &&
      username.length <= 15
    );
    return validate;
  };

  const editProfile = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('PUT', {
      firstName, lastName, username 
    }, 'users/me', {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };
  return (
    <EditProfileContainerStyle>
      <img src={user.imageUrl} alt="profile-image" width="100%"/>
      <input
        value={username} 
        onChange={({target}) => setUsername(target.value.trim())}
      />
      <input
        value={firstName}
        onChange={({target}) => setName(target.value)}
      />
      <input
        value={lastName}
        onChange={({target}) => setLastname(target.value)}
      />
      <button 
        onClick={() => editProfile()}
        disabled={!isValidProfileInfo()}
      >Salvar</button>
    </EditProfileContainerStyle>
  );
};

export default ProfileEdit;