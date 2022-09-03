import { Friend } from '../../types/Friend';
import FriendsCard from '../FriendsCard';

interface Props {
    friends: Friend[]
}

const FriendsDiv: React.FC<Props> = ({friends}) => {
  const pendingFriends = friends.filter((f) => f.status === 'pending');
  const acceptedFriends = friends.filter((f) => f.status === 'accepted');
  return (
    <div>
      <div className="pendingFriends">
        {pendingFriends.map((friend) => (
          <FriendsCard
            key={`${friend}`} 
            friend={friend}
            pending={true}          
          />
        ))}
      </div>
      <div className="acceptedFriends">
        {acceptedFriends.map((friend) => (
          <FriendsCard 
            key={`${friend}`}
            friend={friend}
            pending={false}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsDiv;