import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import SuggestionCard from '../../components/SuggestionCard';
import { IContext, MyContext } from '../../context/MyContext';
import { IFriend, IUser } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { SuggestionsStyle } from './style';

const Suggestions = () => {
  const [allUsers, setAllUsers] = useState<IUser[]>();
  const [friendList, setFriendList] = useState<IFriend>({friends: [], invites: []});
  const {profileImg} = useContext(MyContext) as IContext;

  const getAllUsers = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'users', {authorization: `Bearer ${token}`});
    const response = await requestAPI<IUser[]>(options);
    const filteredUsers = response.data.filter((f) => f.id !== profileImg?.id);
    setAllUsers(filteredUsers);
  };

  const getFriendList = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'friend/me', {authorization: `Bearer ${token}`});
    const response = await requestAPI<IFriend>(options);
    setFriendList(response.data);
  };

  useEffect(() => {
    getFriendList();
    getAllUsers();
  }, [profileImg]);

  return (
    <SuggestionsStyle>
      <Navbar />
      <main>
        <h1>Sugestões de amizade</h1>
        {
          allUsers?.map((user, i) => (
            <SuggestionCard
              key={`${user}_z_${i}`} 
              user={user} 
              friendList={friendList}
            />
          ))
        }
      </main>
      
    </SuggestionsStyle>
  );
};

export default Suggestions;