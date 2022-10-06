import { useLocation, useNavigate } from 'react-router-dom';
import { SuggestionsStyle } from '../../pages/Suggestions/style';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { Friend } from '../../types/Friend';
import FriendBtn from '../FriendBtn';
import { SuggestionCardStyle } from '../SuggestionCard/style';
import { FriendsPageCardStyle } from './style';

interface Props {
    friend: Friend
  }

const FriendsPageCard: React.FC<Props> = ({friend}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const showButtons = pathname === '/friends/';

  console.log(friend);


  const acceptOrRefuseFriend = async (action: string) => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest(action, {}, `friend/${friend.friendId}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };

  return (
    <FriendsPageCardStyle>
      {
        friend.status === 'accepted' &&
        <SuggestionCardStyle>
          <div className="image-profile">
            <img src={friend.friend?.imageUrl}
              onClick={() => navigate(`/user/${friend.friend?.username}`)}
            />
          </div>
          
          <div className='section-user'>
            <p className='username'>{friend.friend?.username}</p>
            <p className='fullname'>{`${friend.friend?.firstName} ${friend.friend?.lastName}`}</p>
          </div>

          <div className='section-invite'>
            {
              showButtons &&
              <FriendBtn
                typeBtn="undo-invite"
                content={'Desfazer Amizade'}
                action={() => acceptOrRefuseFriend('DELETE')}
              />
            }
          </div>
        </SuggestionCardStyle>
      }
      {
        showButtons && friend.status === 'pending' &&
        <SuggestionCardStyle>
          <div className="image-profile">        
            <img src={friend.friend?.imageUrl}
              onClick={() => navigate(`/user/${friend.friend?.username}`)}
            />
          </div>
          
          <div className='section-user'>
            <p className='username'>{friend.friend?.username}</p>
            <p className='fullname'>{`${friend.friend?.firstName} ${friend.friend?.lastName}`}</p>            
          </div>
            
          <div  className='section-invite'>
            <FriendBtn
              typeBtn='send-invite'
              content={'Aceitar Convite'}
              action={() => acceptOrRefuseFriend('PATCH')}
            />
            <FriendBtn
              typeBtn='undo-invite'
              content={'Recusar Convite'}
              action={() => acceptOrRefuseFriend('DELETE')}
            />
          </div>
        </SuggestionCardStyle>
      }
    </FriendsPageCardStyle>
  );
};

export default FriendsPageCard;