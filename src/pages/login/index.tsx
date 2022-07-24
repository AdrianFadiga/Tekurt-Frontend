import { useRef, useState } from 'react';
import Input from '../../components/Input';

function Login() {
  const userInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [invalidUser, setInvalidUser] = useState(false);

  const verifyFields = () => {
    const userValue = userInputRef.current?.value;
    const passwordValue = passwordInputRef.current?.value;
    
    return !userValue?.length || !passwordValue?.length;
  };

  const sigIn = () => {
    const isInvalidFields = verifyFields();

    if(isInvalidFields) setInvalidUser(true);
    else console.log('pode entrar');
  };

  return (
    <section>
      Logo
      <form onSubmit={ (event) => event.preventDefault() }>

        <Input
          holder='Email ou usuário'
          innerRef={ userInputRef }
          type="text"
          errorMessage="Insira o seu email ou nome de usuario"
        />

        <br></br>

        <Input
          holder='Senha'
          innerRef={ passwordInputRef }
          type="password"
          errorMessage="Insira a sua senha"
        />

        <br></br>

        <button type="submit" onClick={ sigIn }>
          Entrar
        </button>

        { invalidUser && <span>Usuario ou senha incorreto</span> }
      </form>
    </section>
  );
}

export default Login;