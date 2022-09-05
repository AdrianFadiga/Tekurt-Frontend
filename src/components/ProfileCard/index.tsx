import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import ProfileContainer from '../ProfileContainer';
import ProfileOptions from '../ProfileOptions';


const ProfileCard = () => {
  const { profileInfo } = useContext(MyContext) as IContext;
  return (
    <>
      {
        profileInfo &&
      <div>
        <ProfileContainer user={profileInfo} />
        <ProfileOptions user={profileInfo}/>
      </div>
      }
    </>
  );
};

export default ProfileCard;