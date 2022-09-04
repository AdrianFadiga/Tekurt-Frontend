import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { SearchScreenStyle } from './style';
import { IoMdArrowBack } from 'react-icons/io';
import UserSearch from '../UserSearch';

interface Props {
  setModal: () => void;
}

const SearchScreen: React.FC<Props> = ({ setModal }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const users = [
    {
      imageUrl: 'https://pinion.community/wp-content/uploads/2022/05/rihanna-nao-sai-do-lado-do-filho.jpg',
      firstName: 'rihanna',
      lastName: 'lopes',
      username: 'rihanna'
    },
    {
      imageUrl: 'https://static.vakinha.com.br/uploads/vakinha/image/2768983/1648580920.954.png?ims=280x280',
      firstName: 'cesar',
      lastName: 'almeida',
      username: 'dancarino'
    }
  ];

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
        { users.map((user, index) => (
          <UserSearch key={ index } user={ user } />
        )) }
      </section>
    </SearchScreenStyle>
  );
};

export default SearchScreen;