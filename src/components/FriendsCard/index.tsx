import { Link } from 'react-router-dom';
import { Friend } from '../../types/Friend';
import { FriendsCardStyle } from './style';

interface Props {
  friend: Friend
}
const FriendsCard: React.FC<Props> = ({friend: {friend}}) => {
  return (
    <FriendsCardStyle>
      <Link 
        to={`/user/${friend.username}`}>
        <img src={friend.imageUrl} />
        <p>{friend.username}</p>
      </Link>
    </FriendsCardStyle>
  );
};

export default FriendsCard;