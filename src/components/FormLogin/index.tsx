import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { setToken } from '../../services/setTokenLocalStorage';
import BtnSubmit from '../BtnSubmit';
import Input from '../Input';

function FormLogin() {
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

  const failRequest = (response: IResponseAPI) => {
    console.log(response.status);
    
    if (response.status === 403) setInvalidUser(true);
    else navigate('/deu-ruim');
  };

  const sigIn = async () => {
    const isInvalidFields = verifyFields();

    if(isInvalidFields) {
      setInvalidUser(true);
      setTimeout(() => setInvalidUser(false), 2000);
    } else {
      const user = userInputRef.current?.value;
      const password = passwordInputRef.current?.value;

      const options = createOptionsRequest('POST', { user, password }, 'auth/signin');

      const response = await requestAPI(options);
      if (response.error) failRequest(response);
      else sucessRequest(response);
    }
  };

  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <Input
        placeholder='Email ou usuário'
        ref={ userInputRef }
        type="text"
        errorMessage="Insira o seu email ou nome de usuario"
      />

      <br></br>

      <Input
        placeholder='Senha'
        ref={ passwordInputRef }
        type="password"
        errorMessage="Insira a sua senha"
      />

      <br></br>

      <BtnSubmit action={ sigIn } content="Entrar" />

      { invalidUser && <span>Usuário ou senha incorreto</span> }
    </form>
  );
}

export default FormLogin;