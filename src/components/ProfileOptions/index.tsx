import { useContext, useEffect, useState } from 'react';
import { BsFillPersonFill, BsHeartFill } from 'react-icons/bs';
import { MdHomeFilled } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { IContext, MyContext } from '../../context/MyContext';
import { IFriend } from '../../interfaces/IFriend';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import FriendBtn from '../FriendBtn';
import { ProfileOptionsStyle } from './style';
import { IoImage } from 'react-icons/io5';

interface Props {
  user: IUser
}

const ProfileOptions: React.FC<Props> = ({user}) => {
  const [invited, setInvited] = useState<boolean>(true);
  const { profileImg } = useContext(MyContext) as IContext;
  const { username } = useParams();
  const navigate = useNavigate();
  const loggedId = profileImg?.id;
  const verifyInvite = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, `friend/${user.id}`, {authorization: `Bearer ${token}`});
    const {data} = await requestAPI<IFriend[]>(options);
    const invited = data.some((f) => f.friendId === loggedId);
    setInvited(invited);
  };
  
  const inviteOrDelete = async () => {
    const token = localStorage.getItem('authTekurt');
    const action = invited ? 'DELETE' : 'POST';
    const options = createOptionsRequest(action, {}, `friend/${user.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    // setInvited(!invited);
    window.location.reload();
  };
  
  useEffect(() => {
    verifyInvite();
  }, [user]);

  return (
    <ProfileOptionsStyle>
      <button
        type="button"
      >
        <MdHomeFilled />
        Início
      </button>
      <button
        type="button"
        onClick={() => navigate(`/friends/${username || ''}`)}
      >
        <BsFillPersonFill />
        Amigos
      </button>
      {
        username && user.id !== loggedId &&
      <FriendBtn
        content={invited ? 'Desfazer amizade' : 'Convite de amizade'}
        action={() => inviteOrDelete()}>
      </FriendBtn>
      }
      <button
        type="button"
      >
        <BsHeartFill />
        Depoimentos
      </button>
      <button
        type="button"
        onClick={() => navigate(`/posts/${username || ''}`)}
      >
        <IoImage />
        Galeria
      </button>
    </ProfileOptionsStyle>
  );
};

export default ProfileOptions;