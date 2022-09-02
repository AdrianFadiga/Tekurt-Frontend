import FormLogin from '../../components/FormLogin';
import ModalRegister, { ModalHandles } from '../../components/ModalRegister';
import Logo from '../../components/Logo';
import ThemeBtn from '../../components/ThemeBtn';
import { Span } from './Span';
import { LoginStyle } from './style';
import { useRef } from 'react';

function Login() {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <LoginStyle>
      <Logo />
      <FormLogin />

      <Span>Esqueceu sua senha?</Span>

      <Span>Não tem uma conta?<button type="button" onClick={ handleOpenModal }>Cadastre-se</button></Span>
      <ModalRegister ref={ modalRef }/>
    </LoginStyle>
  );
}

export default Login;