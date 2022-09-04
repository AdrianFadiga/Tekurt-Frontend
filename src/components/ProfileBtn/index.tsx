import { useContext, useEffect } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import { ProfileStyle } from './style';

function ProfileBtn() {
  const { profileImg, getProfileImg } = useContext(MyContext) as IContext;
  
  useEffect(() => {
    if (!profileImg) getProfileImg();
  }, [profileImg]);

  return (
    <ProfileStyle>
      <img
        src={ profileImg }
      />
    </ProfileStyle>
  );
}

export default ProfileBtn;