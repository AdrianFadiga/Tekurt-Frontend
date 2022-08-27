import { IUser } from '../../interfaces/IUser';

interface Props {
    user: IUser
  }

const SearchCard: React.FC<Props> = ({user}) => {
  return (
    <div>
      <img src={user.imageUrl} />
      <p>{user.username}</p>
      <p>{`${user.firstName} ${user.lastName}`}</p>
    </div>
  );
};

export default SearchCard;