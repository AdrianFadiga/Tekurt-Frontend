import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import FriendsCard from '../FriendsCard';
import { FriendsStyle } from './style';


const FriendsDiv = () => {
  const {profileInfo} = useContext(MyContext) as IContext;
  const pendingFriends = profileInfo?.friends.filter((f) => f.status === 'pending');
  const acceptedFriends = profileInfo?.friends.filter((f) => f.status === 'accepted');

  const friends = [{
    friend: {
      firstName: 'matheus',
      imageUrl: 'https://pbs.twimg.com/profile_images/1433557875574534148/6q4ZzmrA_400x400.jpg',
      lastName: 'ferreira',
      username: 'theusferreira'
    },
    friendId: 'dwadaw',
    status: 'accepted',
    userId: 'ddd'
  },
  {
    friend: {
      firstName: 'matheus',
      imageUrl: 'https://pbs.twimg.com/profile_images/1433557875574534148/6q4ZzmrA_400x400.jpg',
      lastName: 'ferreira',
      username: 'theusferreira'
    },
    friendId: 'dwadaw',
    status: 'accepted',
    userId: 'ddd'
  }];
  
  return (
    <FriendsStyle>
      <div className='titleSection'>
        <h1>Amigos</h1>
        <a href="#">Ver todos</a>
      </div>

      <div className="acceptedFriends">
        {friends?.map((friend, i) => (
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