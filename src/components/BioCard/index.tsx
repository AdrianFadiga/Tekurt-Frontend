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
            <td>{profileInfo?.biography}dawdadwdddddddddddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddd</td>
          </tr>
          <tr>
            <td>Relacionamento:</td>
            <td>{profileInfo?.socialStatusId}</td>
          </tr>
          <tr>
            <td>Crianças:</td>
            <td>{profileInfo?.children}</td>
          </tr>
          <tr>
            <td>Fuma:</td>
            <td>{profileInfo?.smokes}</td>
          </tr>
          <tr>
            <td>Bebe:</td>
            <td>{profileInfo?.drinkingId}</td>
          </tr>
          <tr>
            <td>Signo:</td>
            <td>{profileInfo?.signId}</td>
          </tr>
        </tbody>
      </table>
    </BioCardStyle>
  );
};

export default BioCard;