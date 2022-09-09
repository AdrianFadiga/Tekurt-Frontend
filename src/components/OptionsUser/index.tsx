import { useContext } from 'react';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { IContext, MyContext } from '../../context/MyContext';
import { OptionsStyle } from './style';
import { CgDarkMode } from 'react-icons/cg';
import { BsPerson } from 'react-icons/bs';
import { IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface Props {
  setModal: () => void
}

const OptionsUser: React.FC<Props> = ({ setModal }) => {
  const { profileImg, toggleTheme } = useContext(MyContext) as IContext;
  console.log(profileImg);
  const navigate = useNavigate();

  const navigateTo = (to: string) => {
    setModal();

    navigate(to);
  };

  const loggout = () => {
    console.log('deve ssair');
  };

  return (
    <OptionsStyle>
      <div className='mobileVisible'>
        <button type="button" onClick={ setModal }><AiOutlineClose /></button>
        Conta
      </div>

      <div className='mobileVisible'>
        <img src={ profileImg?.imageUrl } alt="Imagem de perfil" />
        <span>{ profileImg?.username }</span>
      </div>

      <ul className="list">
        <li onClick={ () => navigateTo('/home')}><BsPerson />Perfil</li>
        <li onClick={ toggleTheme }><CgDarkMode />Alternar Tema</li>
        <li onClick={ () => navigateTo('/about')}><AiOutlineInfoCircle />Sobre</li>
        <li onClick={ loggout }><IoLogOutOutline />Sair</li>
      </ul>
      <button className="closeModal" onClick={ setModal } type="button"/>
    </OptionsStyle>
  );
};

export default OptionsUser;