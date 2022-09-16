import { Link, useLocation } from 'react-router-dom';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { Friend } from '../../types/Friend';
import FriendBtn from '../FriendBtn';

interface Props {
    friend: Friend
    pending: boolean
  }

const FriendsPageCard: React.FC<Props> = ({friend: {friend, friendId}, pending}) => {
  const {pathname} = useLocation();
  const showPendingInvite = !pending || pathname === '/friends/';
  const acceptFriend = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('PATCH', {}, `friend/${friendId}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };
  const refuseFriend = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('DELETE', {}, `friend/${friendId}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };
  return (
    <div>
      {
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
        pending && pathname === '/friends/' &&
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

export default FriendsPageCard;