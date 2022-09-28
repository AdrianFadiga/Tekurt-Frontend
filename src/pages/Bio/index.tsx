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
import { useNavigate } from 'react-router-dom'; 
import { IFriend } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { getProfileInfo, profileImg } = useContext(MyContext) as IContext;
  const [editingBio, setEditingBio] = useState<boolean>(false);
  const [friendList, setFriendList] = useState<IFriend>({friends: [], invites: []});

  const getFriendList = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'friend/me', {authorization: `Bearer ${token}`});
    const response = await requestAPI<IFriend>(options);
    setFriendList(response.data);
  };

  useEffect(() => {
    getProfileInfo(username)
      .catch(() => navigate('/not-found'));
    getFriendList();
  }, [username]);

  useEffect(() => {
    if (username === profileImg?.username) navigate('/home');
  }, [username]);

  return (
    <BioStyle>
      <Navbar />
      <main>
        <ProfileCard
          editingBio={editingBio}
          friendList={friendList}
        />
        {
          editingBio
            ? <EditBio editBio={ setEditingBio }/>
            : <BioCard editBio={ setEditingBio } profileOwner={ !!username } />
        }          
        <FriendsDiv />
      </main>
    </BioStyle>
  );
}

export default Profile;