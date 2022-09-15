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

  const getFilteredUsers = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, `users/?filter=${searchValue}`, {authorization: `Bearer ${token}`});
    const response = await requestAPI<IUser[]>(options);
    setFilteredUsers(response.data);
  };

  useEffect(() => {
    setTimeout(() => {
      getFilteredUsers();     
    }, 700);
  }, [searchValue]);

  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <SearchStyle onSubmit={ (e) => event?.preventDefault() }>
      <div className="input">
        <input
          type="text"
          onFocus={() => setOpenModal(true)}
          onBlur={() => setOpenModal(false)}
          value={searchValue}
          placeholder="Pesquisar"
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
        <>
          <SearchScreen 
            setModal={ setModal }
            filteredUsers={filteredUsers}
          />
        </>        
      ) }
    </SearchStyle>
  );
}

export default SearchBar;