import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SearchCard from '../../components/SearchCard';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';


const Search = () => {
  const {searchValue} = useParams();
  const [userList, setUserList] = useState<IUser[]>([]);

  const getUserList = async (): Promise<void> => {
    const allUsers = await searchUser();
    const filterByUsername = allUsers.filter((f) => f.username === searchValue);
    setUserList(filterByUsername);
  };
  const searchUser = async (): Promise<IUser[]> => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'users', {authorization: `Bearer ${token}`});
    const {data} = await requestAPI<IUser[]>(options);
    return data;
  };
    
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <section>
      <Navbar />
      <h1>Usuários encontrados:</h1>
      <div>
        {userList.map((user, i) => (
          <SearchCard
            key={`${user}...${i}`} 
            user={user} />
        ))}
      </div>
    </section>
  );
};

export default Search;