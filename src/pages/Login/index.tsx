import FormLogin from '../../components/FormLogin';
import Logo from '../../components/Logo';
import { LoginStyle } from './style';

function Login() {
  return (
    <LoginStyle>
      <Logo />
      <FormLogin />

      <p>Esqueceu sua senha?</p>

      <p>Não tem uma conta? Cadastre-se</p>
    </LoginStyle>
  );
}

export default Login;