import { useContext, useEffect } from 'react';
import { IContext, MyContext } from '../../context/MyContext';

function ProfileBtn() {
  const { profileImg, getProfileImg } = useContext(MyContext) as IContext;
  useEffect(() => {
    if (!profileImg) getProfileImg();
  }, [profileImg]);
  return (
    <img 
      src={profileImg}
      style={{width: '100px'}}
    />
  );
}

export default ProfileBtn;