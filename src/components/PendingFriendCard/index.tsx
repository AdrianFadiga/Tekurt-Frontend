import { Link } from 'react-router-dom';
import { Friend } from '../../types/Friend';

interface Props {
    friends: Friend[]
  }

const PendingFriendCard: React.FC<Props> = ({friends}) => {
  const pendingFriends = friends.filter((f) => f.status === 'pending');
  return (
    <div>
      {pendingFriends.map(({friend}, i) => (
        <div
          key={`${i}asdasdas${i*2}`}
        >
          <Link
            to={`/user/${friend.username}`}
          >
            <img src={friend.imageUrl} />
            <p>{friend.firstName}</p>
            <p>{friend.lastName}</p>
            <p>{friend.username}</p>
          </Link>
          <button>Aceitar</button>
          <button>Recusar</button>
        </div>
      ))}
    </div>
  );
};

export default PendingFriendCard;