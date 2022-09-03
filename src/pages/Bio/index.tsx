import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BioCard from '../../components/BioCard';
import FriendsCard from '../../components/FriendsCard';
import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';

function Profile() {
  const { username } = useParams();
  const { profileInfo, getProfileInfo } = useContext(MyContext) as IContext;

  useEffect(() => {
    getProfileInfo(username);
  }, [username]);
  return (
    <section>
      <Navbar />
      <main>
        {profileInfo.map((user, i) => (
          <ProfileCard 
            key={`${user}${i}`}
            user={user}
          />
        ))}
        {profileInfo.map((user, i) => (
          <BioCard
            key={`${i}${user}`}
            user={user}/>
        ))}
        {profileInfo.map((user, i) => (
          <FriendsCard 
            key={`${i}...${user}`}
            user={user}
          />

        ))}
      </main>
    </section>
  );
}

export default Profile;