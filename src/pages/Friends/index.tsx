import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FriendsPageCard from '../../components/FriendsPageCard';
import { IContext, MyContext } from '../../context/MyContext';

const Friends = () => {
  const { username } = useParams();
  const { getProfileInfo, profileInfo } = useContext(MyContext) as IContext;
  const navigate = useNavigate();

  useEffect(() => {
    getProfileInfo(username)
      .catch(() => navigate('/not-found'));
  }, [username]);

  return (
    <section>
      <Navbar />
      <h1>Amigos:</h1>
      <section className="friends-container">
        {
          profileInfo?.friends.map((friend, i) => (
            <FriendsPageCard
              key={`${friend}xXx${i}`}
              friend={friend}            
            />
          ))
        }
      </section>
    </section>
  );
};

export default Friends;