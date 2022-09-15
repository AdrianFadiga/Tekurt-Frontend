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
        onChange={({target}) => setUsername(target.value)}
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
      >Salvar</button>
    </EditProfileContainerStyle>
  );
};

export default ProfileEdit;