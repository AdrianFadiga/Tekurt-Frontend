import { useNavigate } from 'react-router-dom';
import { IFriend, IUser } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import FriendBtn from '../FriendBtn';
import { SuggestionCardStyle } from './style';

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
    return 'Adicionar amigo';
  };
  const navigate = useNavigate();

  const inviteOrDelete = async () => {
    const token = localStorage.getItem('authTekurt');
    const action = areFriends || iInvited ? 'DELETE' : 'POST';
    const options = createOptionsRequest(action, {}, `friend/${user.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };
  
  return (
    <SuggestionCardStyle>
      <div className='image-profile'>
        <img 
          src={user.imageUrl}
          onClick={() => navigate(`/user/${user.username}`)} 
        />
      </div>
      

      <div className='section-user'>
        <p className='username'>{user.username}</p>
        <p className='fullname'>{`${user.firstName} ${user.lastName}`}</p>
      </div>
      
      <div className='section-invite'>
        <FriendBtn 
          content={setActionButton()}
          action={() => inviteOrDelete()} />
      </div>
      
    </SuggestionCardStyle>
  );
};

export default SuggestionCard;