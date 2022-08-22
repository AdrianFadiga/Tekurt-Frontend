import FormLogin from '../../components/FormLogin';
import Logo from '../../components/Logo';
import ThemeBtn from '../../components/ThemeBtn';
import { Span } from './Span';
import { LoginStyle } from './style';

function Login() {
  return (
    <LoginStyle>
      <Logo />
      <FormLogin />

      <Span>Esqueceu sua senha?</Span>

      <Span>Não tem uma conta? <a href="#">Cadastre-se</a></Span>
      <ThemeBtn />
    </LoginStyle>
  );
}

export default Login;