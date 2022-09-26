import { useContext } from 'react';
import { BiPencil } from 'react-icons/bi';
import { IContext, MyContext } from '../../context/MyContext';
import { BioCardStyle } from './style';

interface Props {
  editBio: React.Dispatch<React.SetStateAction<boolean>>
  profileOwner: boolean
}

const BioCard: React.FC<Props> = ({ editBio, profileOwner }) => {
  const { profileInfo, editingProfile, changePhoto } = useContext(MyContext) as IContext;
  
  return (
    <BioCardStyle>
      <div className='headerBio'>
        <h2>Bio</h2>
        {!profileOwner &&
          <button
            className='editBtn'
            onClick={() => editBio(true)}
            disabled={editingProfile || changePhoto}
          >
            <BiPencil />
          </button>
        }
      </div>
      
      <table>
        <tbody>
          <tr>
            <td>Sobre mim:</td>
            <td>{profileInfo?.biography}</td>
          </tr>
          <tr>
            <td>Relacionamento:</td>
            <td>{profileInfo?.socialStatus.option}</td>
          </tr>
          <tr>
            <td>Crianças:</td>
            <td>{profileInfo?.children ? 'Sim' : 'Não'}</td>
          </tr>
          <tr>
            <td>Fuma:</td>
            <td>{profileInfo?.smokes ? 'Sim' : 'Não'}</td>
          </tr>
          <tr>
            <td>Bebe:</td>
            <td>{profileInfo?.drinking.option}</td>
          </tr>
          <tr>
            <td>Signo:</td>
            <td>{profileInfo?.sign.option}</td>
          </tr>
        </tbody>
      </table>
    </BioCardStyle>
  );
};

export default BioCard;