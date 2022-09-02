import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioCard from '../../components/BioCard';
import FriendsCard from '../../components/FriendsCard';
import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

function Profile() {
  const { username } = useParams();
  const [userBio, setUserBio] = useState<IUser[]>([]);
  const getProfile = async () => {
    const fetchRoute = username === undefined ? 'users/me' : `users/${username}`;
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, fetchRoute, {authorization: `Bearer ${token}`});
    const response = await requestAPI(options);
    setUserBio([response.data as IUser]);
  };
  useEffect(() => {
    getProfile();
  }, [username]);
  return (
    <section>
      <Navbar />
      <main>
        {userBio.map((user, i) => (
          <ProfileCard 
            key={`${user}${i}`}
            user={user}
          />
        ))}
        {userBio.map((user, i) => (
          <BioCard
            key={`${i}${user}`}
            user={user}/>
        ))}
        {userBio.map((user, i) => (
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