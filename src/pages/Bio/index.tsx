import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioCard from '../../components/BioCard';
import EditBio from '../../components/EditBio';
import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import FriendsDiv from '../../components/FriendsDiv';
import { BioStyle } from './style';

function Profile() {
  const { username } = useParams();
  const { getProfileInfo } = useContext(MyContext) as IContext;
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    getProfileInfo(username);
  }, [username]);
  return (
    <BioStyle>
      <Navbar />
      <main>
        <ProfileCard />
        {!username &&
        <button onClick={() => setEditing(!editing)}>Editar perfil</button>
        }
        {
          editing ? <EditBio /> :  <BioCard />          
        }
          
        <FriendsDiv />
      </main>
    </BioStyle>
  );
}

export default Profile;