import { useNavigate } from 'react-router-dom';
import { IFriend, IUser } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import FriendBtn from '../FriendBtn';

interface Props {
    user: IUser
    friendList: IFriend
}

const SuggestionCard: React.FC<Props> = ({user, friendList}) => {
  const areFriends = friendList.friends.some((f) => f.friendId === user.id && f.status === 'accepted');
  const iWasInvited = friendList.friends.some((f) => f.friendId === user.id && f.status === 'pending');
  const iInvited = friendList.invites.some((f) => f.userId === user.id);
  const setActionButton = () => {
    if (areFriends) return 'Desfazer Amizade';
    if (iWasInvited) return 'Aceitar Convite';
    if (iInvited) return 'Desfazer Convite';
    return 'Convite de Amizade';
  };
  const navigate = useNavigate();

  const inviteOrDelete = async () => {
    const token = localStorage.getItem('authTekurt');
    const action = areFriends || iInvited ? 'DELETE' : 'POST';
    const options = createOptionsRequest(action, {}, `friends/${user.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };
  
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <img 
        src={user.imageUrl}
        onClick={() => navigate(`/user/${user.username}`)} 
      />
      <FriendBtn 
        content={setActionButton()}
        action={() => inviteOrDelete()} />
    </div>
  );
};

export default SuggestionCard;