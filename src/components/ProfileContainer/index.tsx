import { IUser } from '../../interfaces/IUser';
import { ProfileContainerStyle } from './style';

interface Props {
    user: IUser
  }

const ProfileContainer: React.FC<Props> = ({user}) => {
  return (
    <ProfileContainerStyle>
      <img src={user.imageUrl} alt="profile-image" width="100%"/>
      <p className='username'>{ user.username }</p>
      <p>{`${user.firstName} ${user.lastName}`} - solteiro</p>
    </ProfileContainerStyle>
  );
};

export default ProfileContainer;