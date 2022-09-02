import { Link } from 'react-router-dom';
import { IUser } from '../../interfaces/IUser';

interface Props {
  user: IUser
}
const FriendsCard: React.FC<Props> = ({user: {friends}}) => {
  const filteredFriends = friends.filter((f) => f.status === 'accepted');
  return (
    <section>
      <h1>FriendsCard</h1>
      <div>
        {filteredFriends.map(({friend}, i) => (
          <Link 
            to={`/user/${friend.username}`}
            key={`${i}asdasdas${i*2}`}>
            <img src={friend.imageUrl} />
            <p>{friend.firstName}</p>
            <p>{friend.lastName}</p>
            <p>{friend.username}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FriendsCard;