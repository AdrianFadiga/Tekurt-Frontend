import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import Navbar from '../../components/Navbar';
import FriendsPageCard from '../../components/FriendsPageCard';

const Friends = () => {
  const { username } = useParams();
  const { getProfileInfo, profileInfo } = useContext(MyContext) as IContext;
  const pendingFriends = profileInfo?.friends.filter((f) => f.status === 'pending');
  const acceptedFriends = profileInfo?.friends.filter((f) => f.status === 'accepted');
  const navigate = useNavigate();
  useEffect(() => {
    getProfileInfo(username)
      .catch(() => navigate('/not-found'));
  }, [username]);

  return (
    <section>
      <Navbar />
      <h1>Amigos:</h1>
      <div>
        {
          pendingFriends?.map((friend, i) => (
            <FriendsPageCard 
              key={`${friend}...${i}`}
              friend={friend}
              pending={true}
            />
          ))
        }    
        {
          acceptedFriends?.map((friend, i) => (
            <FriendsPageCard 
              key={`${i}..${friend}`}
              friend={friend}
              pending={false}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Friends;