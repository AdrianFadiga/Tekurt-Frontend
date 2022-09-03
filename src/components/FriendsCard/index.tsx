import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { Friend } from '../../types/Friend';
import FriendBtn from '../FriendBtn';

interface Props {
  friend: Friend
  pending: boolean
}
const FriendsCard: React.FC<Props> = ({friend: {friend, friendId}, pending}) => {
  const {pathname} = useLocation();
  const [showButtons, setShowButtons] = useState<boolean>(pending && pathname === '/friends/');
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
  };
  return (
    <div>
      {
        showPendingInvite &&
        <div>
          <Link 
            to={`/user/${friend.username}`}>
            <img src={friend.imageUrl} />
            <p>{friend.firstName}</p>
            <p>{friend.lastName}</p>
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
    </div>   
  );
};

export default FriendsCard;