import { useContext, useEffect, useState } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import OptionsUser from '../OptionsUser';
import { ProfileStyle } from './style';
import { RiArrowDownSLine } from 'react-icons/ri';

function ProfileBtn() {
  const { profileImg, getProfileImg } = useContext(MyContext) as IContext;
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    getProfileImg();
  }, []);

  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <ProfileStyle>
      <img
        onClick={ setModal }
        src={ profileImg?.imageUrl }
      />

      <button className="profileBtn" type="button" onClick={ setModal }>
        <div>
          <p>{ profileImg?.username }</p>
          <p>{ `${profileImg?.firstName} ${profileImg?.lastName}` }</p>
        </div>
        <RiArrowDownSLine />
      </button>

      { openModal && (
        <OptionsUser setModal={ setModal }/>
      ) }
    </ProfileStyle>
  );
}

export default ProfileBtn;