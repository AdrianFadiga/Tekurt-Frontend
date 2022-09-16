import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import FriendsCard from '../FriendsCard';
import { FriendsStyle } from './style';


const FriendsDiv = () => {
  const {profileInfo} = useContext(MyContext) as IContext;
  const acceptedFriends = profileInfo?.friends.filter((f) => f.status === 'accepted');
  
  return (
    <FriendsStyle>
      <div className='titleSection'>
        <h1>Amigos</h1>
        <a href="#">Ver todos</a>
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
    </FriendsStyle>
  );
};

export default FriendsDiv;