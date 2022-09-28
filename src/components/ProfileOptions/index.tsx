import { useContext } from 'react';
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
  friendList: IFriend
}

const ProfileOptions: React.FC<Props> = ({user, friendList}) => {
  const { profileImg } = useContext(MyContext) as IContext;
  const { username } = useParams();
  const navigate = useNavigate();
  const loggedId = profileImg?.id;

  const areFriends = friendList.friends.some((f) => f.friendId === user.id && f.status === 'accepted');
  const iWasInvited = friendList.friends.some((f) => f.friendId === user.id && f.status === 'pending');
  const iInvited = friendList.invites.some((f) => f.userId === user.id);

  const setActionButton = () => {
    if (areFriends) return 'Desfazer Amizade';
    if (iWasInvited) return 'Aceitar Convite';
    if (iInvited) return 'Desfazer Convite';
    return 'Convite de Amizade';
  };
  
  const inviteOrDelete = async () => {
    const token = localStorage.getItem('authTekurt');
    const action = areFriends || iInvited ? 'DELETE' : 'POST';
    const options = createOptionsRequest(action, {}, `friend/${user.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };

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
        content={setActionButton()}
        action={() => inviteOrDelete()}>
      </FriendBtn>
      }
      <button
        type="button"
        onClick={() => navigate(`/testimonials/${username || ''}`)}
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