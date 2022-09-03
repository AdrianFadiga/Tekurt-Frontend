import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { SearchStyle } from './style';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  return (
    <SearchStyle>
      <input
        type="text"
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)}
      />
      <button
        type="button"
        disabled={searchValue.length === 0}
        onClick={() => navigate(`/search/${searchValue}`)}
        className="text"
      >
        <FiSearch/>
      </button>
    </SearchStyle>
  );
}

export default SearchBar;