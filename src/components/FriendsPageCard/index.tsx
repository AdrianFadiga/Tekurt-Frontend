import { useLocation, useNavigate } from 'react-router-dom';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { Friend } from '../../types/Friend';
import FriendBtn from '../FriendBtn';

interface Props {
    friend: Friend
  }

const FriendsPageCard: React.FC<Props> = ({friend}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const showButtons = pathname === '/friends/';


  const acceptOrRefuseFriend = async (action: string) => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest(action, {}, `friends/${friend.friendId}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };

  return (
    <div>
      {
        friend.status === 'accepted' &&
        <div>        
          <img src={friend.friend?.imageUrl}
            onClick={() => navigate(`/user/${friend.friend?.username}`)}
          />
          <p>{`${friend.friend?.firstName} ${friend.friend?.lastName}`}</p>
          <p>{friend.friend?.username}</p>
          {
            showButtons &&
            <FriendBtn 
              content={'Desfazer amizade'}
              action={() => acceptOrRefuseFriend('DELETE')}
            />
          }
        </div>
      }
      {
        showButtons && friend.status === 'pending' &&
        <div>
          <div>        
            <img src={friend.friend?.imageUrl}
              onClick={() => navigate(`/user/${friend.friend?.username}`)}
            />
            <p>{`${friend.friend?.firstName} ${friend.friend?.lastName}`}</p>
            <p>{friend.friend?.username}</p>
            <FriendBtn 
              content={'Aceitar Convite'}
              action={() => acceptOrRefuseFriend('PATCH')}
            />
            <FriendBtn 
              content={'Recusar Convite'}
              action={() => acceptOrRefuseFriend('DELETE')}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default FriendsPageCard;