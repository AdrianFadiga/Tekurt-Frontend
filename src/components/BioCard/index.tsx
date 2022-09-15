import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import { BioCardStyle } from './style';


const BioCard = () => {
  const {profileInfo} = useContext(MyContext) as IContext;
  return (
    <BioCardStyle>
      <h2>Bio</h2>
      <table>
        <tbody>
          <tr>
            <td>Sobre mim:</td>
            <td>{profileInfo?.biography}</td>
          </tr>
          <tr>
            <td>Relacionamento:</td>
            <td>{profileInfo?.socialStatus.status}</td>
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
            <td>{profileInfo?.sign.sign}</td>
          </tr>
        </tbody>
      </table>
    </BioCardStyle>
  );
};

export default BioCard;