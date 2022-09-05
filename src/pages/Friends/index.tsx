import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import Navbar from '../../components/Navbar';
import FriendsDiv from '../../components/FriendsDiv';

const Friends = () => {
  const { username } = useParams();
  const { getProfileInfo } = useContext(MyContext) as IContext;
  useEffect(() => {
    getProfileInfo(username);
  }, [username]);

  return (
    <section>
      <Navbar />
      <h1>Amigos:</h1>
      <div>    
        <FriendsDiv />
      </div>
    </section>
  );
};

export default Friends;