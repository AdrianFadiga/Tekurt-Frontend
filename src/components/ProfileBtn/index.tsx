import { useContext, useEffect, useState } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import OptionsUser from '../OptionsUser';
import { ProfileStyle } from './style';

function ProfileBtn() {
  const { profileImg, getProfileImg } = useContext(MyContext) as IContext;
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    if (!profileImg?.imageUrl) getProfileImg();
  }, [profileImg]);

  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <ProfileStyle>
      <img
        onClick={ setModal }
        src={ profileImg?.imageUrl }
      />

      { openModal && (
        <OptionsUser setModal={ setModal }/>
      ) }
    </ProfileStyle>
  );
}

export default ProfileBtn;