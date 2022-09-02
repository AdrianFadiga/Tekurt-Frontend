import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  return (
    <form>
      <input
        type="text"
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)}
      />
      <button
        type="button"
        disabled={searchValue.length === 0}
        onClick={() => navigate(`/search/${searchValue}`)}>
        Search User
      </button>
    </form>
  );
}

export default SearchBar;