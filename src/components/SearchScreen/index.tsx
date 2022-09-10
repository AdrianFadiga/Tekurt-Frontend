import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { SearchScreenStyle } from './style';
import { IoMdArrowBack } from 'react-icons/io';
import UserSearch from '../UserSearch';
import { IUser } from '../../interfaces/IUser';

interface Props {
  setModal: () => void;
  filteredUsers: IUser[];
}

const SearchScreen: React.FC<Props> = ({ setModal, filteredUsers }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  return (
    <SearchScreenStyle>
      <section>
        <button onClick={ setModal }><IoMdArrowBack /></button>
        <input
          type="text"
          className='searchInput'
          value={searchValue}
          onChange={({target}) => setSearchValue(target.value)}
        />
        <button
          type="button"
          disabled={searchValue.length === 0}
          onClick={() => navigate(`/search/${searchValue}`)}
          className="text"
        >
          <FiSearch onClick={ setModal }/>
        </button>
      </section>

      <section>
        { filteredUsers.map((user, index) => (
          <UserSearch key={ index } user={ user } />
        )) }
      </section>

      <button className="closeModal" onClick={ setModal } type="button"/>
    </SearchScreenStyle>
  );
};

export default SearchScreen;