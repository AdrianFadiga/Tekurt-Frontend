import FormLogin from '../../components/FormLogin';
import ModalRegister, { ModalHandles } from '../../components/ModalRegister';
import Logo from '../../components/Logo';
import { Span } from './Span';
import { LoginStyle } from './style';
import { useRef } from 'react';
import ThemeBtn from '../../components/ThemeBtn';

function Login() {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <LoginStyle>
      <section className='cardLogin'>
        <Logo />
        <FormLogin />

        <Span>Esqueceu sua senha?</Span>

        <Span>Não tem uma conta? <button type="button" className="btn-register" onClick={ handleOpenModal }>Cadastre-se</button></Span>
        <ModalRegister ref={ modalRef }/>
      </section>
    </LoginStyle>
  );
}

export default Login;