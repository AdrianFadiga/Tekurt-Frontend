import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import FriendsCard from '../FriendsCard';


const FriendsDiv = () => {
  const {profileInfo} = useContext(MyContext) as IContext;
  const pendingFriends = profileInfo?.friends.filter((f) => f.status === 'pending');
  const acceptedFriends = profileInfo?.friends.filter((f) => f.status === 'accepted');
  return (
    <div>
      <div className="pendingFriends">
        {pendingFriends?.map((friend, i) => (
          <FriendsCard
            key={`${friend}${i}`} 
            friend={friend}
            pending={true}          
          />
        ))}
      </div>
      <div className="acceptedFriends">
        {acceptedFriends?.map((friend, i) => (
          <FriendsCard 
            key={`${i}${friend}`}
            friend={friend}
            pending={false}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsDiv;