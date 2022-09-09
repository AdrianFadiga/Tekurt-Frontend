import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import ProfileContainer from '../ProfileContainer';
import ProfileOptions from '../ProfileOptions';
import { ProfileCardStyle } from './style';


const ProfileCard = () => {
  const { profileInfo } = useContext(MyContext) as IContext;
  return (
    <>
      {
        profileInfo &&
      <ProfileCardStyle>
        <ProfileContainer user={profileInfo} />
        <ProfileOptions user={profileInfo}/>
      </ProfileCardStyle>
      }
    </>
  );
};

export default ProfileCard;