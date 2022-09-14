import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { Friend } from '../../types/Friend';
import FriendBtn from '../FriendBtn';
import { FriendsCardStyle } from './style';

interface Props {
  friend: Friend
  pending: boolean
}
const FriendsCard: React.FC<Props> = ({friend: {friend, friendId}, pending}) => {
  const {pathname} = useLocation();
  const [showButtons, setShowButtons] = useState<boolean>(pending && pathname === '/friends/');
  const [showRejectInvite, setShowRejectInvite] = useState<boolean>(false);
  const showPendingInvite = !pending || pathname === '/friends/';
  const acceptFriend = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('PATCH', {}, `friend/${friendId}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    setShowButtons(false);
  };
  const refuseFriend = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('DELETE', {}, `friend/${friendId}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    setShowButtons(false);
    setShowRejectInvite(true);
  };
  
  return (
    <FriendsCardStyle>
      <Link 
        to={`/user/${friend.username}`}>
        <img src={friend.imageUrl} />
        <p>{friend.username}</p>
      </Link>

      {/* {
        showPendingInvite &&
        <div className='friend'>
          <Link 
            to={`/user/${friend.username}`}>
            <img src={friend.imageUrl} />
            <p>{friend.username}</p>
          </Link>
        </div>
      }
      {
        showButtons &&
      <div>
        <FriendBtn
          content={'Aceitar'}
          action={() => acceptFriend()}>
        </FriendBtn>
        <FriendBtn
          content={'Recusar'}
          action={() => refuseFriend()}>
        </FriendBtn>
      </div>
      }
      {
        showRejectInvite &&
        <h1>Convite recusado</h1>
      } */}
    </FriendsCardStyle>
  );
};

export default FriendsCard;