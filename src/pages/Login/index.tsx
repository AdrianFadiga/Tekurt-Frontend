import { useRef, useState } from 'react';
import Input from '../../components/Input';
import { IOptionsRequest } from '../../interfaces/IOptionsRequest';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { requestAPI } from '../../services/requestAPI';
import { setToken } from '../../services/setTokenLocalStorage';
import { useNavigate } from 'react-router-dom';

function Login() {
  const userInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const verifyFields = () => {
    const user = userInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    
    return !user?.length || !password?.length;
  };

  const sucessRequest = (response: IResponseAPI) => {
    const { token } = response.data;

    setToken(token);
    navigate('/feed');
  };

  const failRequest = () => {
    setInvalidUser(true);
  };

  const sigIn = async () => {
    const isInvalidFields = verifyFields();   

    if(isInvalidFields) setInvalidUser(true);
    else {
      const user = userInputRef.current?.value;
      const password = passwordInputRef.current?.value;

      const options: IOptionsRequest = {
        method: 'POST',
        url: 'login',
        data: { user, password }
      };

      const response = await requestAPI(options);      

      if (response.error) failRequest();
      else sucessRequest(response);      
    }
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

        { invalidUser && <span>Usuário ou senha incorreto</span> }
      </form>
    </section>
  );
}

export default Login;