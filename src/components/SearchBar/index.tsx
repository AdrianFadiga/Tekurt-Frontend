import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import SearchScreen from '../SearchScreen';
import { SearchStyle } from './style';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  const getAllUsers = async () => {
    const fetchRoute = searchValue ? `users/?filter=${searchValue}` : 'users';
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, fetchRoute, {authorization: `Bearer ${token}`});
    const response = await requestAPI<IUser[]>(options);
    setFilteredUsers(response.data);
  };

  useEffect(() => {
    setTimeout(() => {
      getAllUsers();
    }, 2000);
  }, [searchValue]);

  // useEffect(() => {
  //   const foundUsers = allUsers.filter((user) => [user.username.toLowerCase(), user.firstName.toLowerCase(), user.lastName.toLowerCase()]
  //     .some((u) => u.includes(searchValue.toLowerCase())));
  //   setFilteredUsers(foundUsers);
  // }, [searchValue]);

  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <SearchStyle onSubmit={ (e) => event?.preventDefault() }>
      <div className="input">
        <input
          type="text"
          value={searchValue}
          onChange={({target}) => setSearchValue(target.value)}
        />
        <button
          type="submit"
          disabled={searchValue.length === 0}
          onClick={ setModal }
          className="text"
        >
          <FiSearch onClick={ setModal }/>
        </button>
      </div>
      
      { openModal && (
        <SearchScreen 
          setModal={ setModal }
          filteredUsers={filteredUsers}/>
      ) }
    </SearchStyle>
  );
}

export default SearchBar;