import { useContext } from 'react';
import { AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai';
import { IContext, MyContext } from '../../context/MyContext';
import { OptionsStyle } from './style';
import { CgDarkMode } from 'react-icons/cg';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoLogOut } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface Props {
  setModal: () => void
}

const OptionsUser: React.FC<Props> = ({ setModal }) => {
  const { profileImg, toggleTheme } = useContext(MyContext) as IContext;
  const navigate = useNavigate();

  const navigateTo = (to: string) => {
    setModal();

    navigate(to);
  };

  const logout = () => {
    localStorage.removeItem('authTekurt');
    navigate('/');
  };

  const setModalTheme = () => {
    setModal();
    toggleTheme();
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
        <li onClick={ () => navigateTo('/home')}><BsFillPersonFill />Perfil</li>
        <li onClick={ setModalTheme }><CgDarkMode />Alternar Tema</li>
        <li onClick={ () => navigateTo('/about')}><AiFillInfoCircle />Sobre</li>
        <li onClick={ logout }><IoLogOut />Sair</li>
      </ul>
      <button className="closeModal" onClick={ setModal } type="button"/>
    </OptionsStyle>
  );
};

export default OptionsUser;