import { useNavigate } from 'react-router-dom';
import { SearchUserStyle } from './style';

type User = {
  imageUrl: string,
  firstName: string,
  lastName: string,
  username: string
}

interface Props {
  user: User
}

const UserSearch: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <SearchUserStyle>
      <button className='userSearch' onClick={ () => navigate(`/user/${user.username}`) }>
        <img src={ user.imageUrl } alt="imagem do usuario" />
        <div>
          <p>{ user.username }</p>
          <p>{ `${user.firstName} ${user.lastName}` }</p>
        </div> 
      </button>
    </SearchUserStyle>
  );
};

export default UserSearch;