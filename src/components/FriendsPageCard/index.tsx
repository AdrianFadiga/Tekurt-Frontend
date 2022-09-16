import { Friend } from '../../types/Friend';

interface Props {
    friend: Friend
    pending: boolean
  }

const FriendsPageCard: React.FC<Props> = ({friend: {friend, friendId}, pending}) => {
  return (
    <h1>FriendsPageCard</h1>
  );
};

export default FriendsPageCard;