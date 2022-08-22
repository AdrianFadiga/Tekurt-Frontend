import FormLogin from '../../components/FormLogin';
import Logo from '../../components/Logo';

function Login() {
  return (
    <main>
      <Logo />
      <FormLogin />

      <p>Esqueceu sua senha?</p>

      <p>Não tem uma conta? Cadastre-se</p>
    </main>
  );
}

export default Login;