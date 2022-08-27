import { IUser } from '../../interfaces/IUser';
import ProfileContainer from '../ProfileContainer';
import ProfileOptions from '../ProfileOptions';

interface Props {
  user: IUser
}

const ProfileCard: React.FC<Props> = ({user}) => {

  return (
    <div>
      <ProfileContainer user={user} />
      <ProfileOptions />
    </div>
  );
};

export default ProfileCard;