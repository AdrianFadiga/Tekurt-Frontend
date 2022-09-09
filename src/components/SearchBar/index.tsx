import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SearchScreen from '../SearchScreen';
import { SearchStyle } from './style';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

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
        <SearchScreen setModal={ setModal }/>
      ) }
    </SearchStyle>
  );
}

export default SearchBar;