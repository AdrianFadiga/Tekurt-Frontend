import { useContext } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { IContext, MyContext } from '../../context/MyContext';
import ProfileContainer from '../ProfileContainer';
import ProfileEdit from '../ProfileEdit';
import ProfileOptions from '../ProfileOptions';
import { ProfileCardStyle } from './style';

interface Props {
  editingBio: boolean
}

const ProfileCard: React.FC<Props> = ({editingBio}) => {
  const { 
    profileInfo, 
    editingProfile, 
    setEditingProfile, 
    changePhoto, 
    setChangePhoto 
  } = useContext(MyContext) as IContext;
  const {username} = useParams();
  return (
    <>
      {
        profileInfo &&
        <ProfileCardStyle>
          { !username &&
          // <div>
          //   
          // </div>
            <label>
              <BsThreeDots />
              <input type="checkbox" />

              <div>
                <button 
                  onClick={() => setEditingProfile(!editingProfile)}
                  disabled={editingBio || changePhoto}
                >
                Editar informações
                </button>          
                <button 
                  onClick={() => setChangePhoto(!changePhoto)}
                  disabled={editingBio || editingProfile}
                >
                Trocar foto
                </button>
              </div>
            </label>            
          } 
          {
            editingProfile ? <ProfileEdit user={profileInfo} /> : <ProfileContainer user={profileInfo} />
          }
          <ProfileOptions user={profileInfo}/>
        </ProfileCardStyle>
      }
    </>
  );
};

export default ProfileCard;