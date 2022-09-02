import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioCard from '../../components/BioCard';
import FriendsCard from '../../components/FriendsCard';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { Friend } from '../../types/Friend';

const Bio = () => {
  const [userBio, setUserBio] = useState<IUser[]>([]);
  const {username} = useParams();
  const getProfile = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, `users/${username}`, {authorization: `Bearer ${token}`});
    const response = await requestAPI(options);
    setUserBio([response.data as IUser]);
  };
  useEffect(() => {
    getProfile();
  }, []);
  console.log(userBio);
  return (
    <section>
      <h1>UserBio</h1>
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
    </section>
  );
};

export default Bio;