import { IUser } from '../../interfaces/IUser';

interface Props {
    user: IUser
  }

const ProfileContainer: React.FC<Props> = ({user}) => {
  return (
    <div>
      <img src={user.imageUrl} alt="profile-image" width="100%"/>
      <p>{`${user.firstName} ${user.lastName}`}</p>
      <p>{user.socialStatusId}</p>
    </div>
  );
};

export default ProfileContainer;