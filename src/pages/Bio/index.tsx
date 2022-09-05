import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BioCard from '../../components/BioCard';
import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import FriendsDiv from '../../components/FriendsDiv';

function Profile() {
  const { username } = useParams();
  const { getProfileInfo } = useContext(MyContext) as IContext;

  useEffect(() => {
    getProfileInfo(username);
  }, [username]);
  return (
    <section>
      <Navbar />
      <main>
        <ProfileCard />
        <BioCard />
        <h1>Amigos</h1>
        <FriendsDiv />
      </main>
    </section>
  );
}

export default Profile;