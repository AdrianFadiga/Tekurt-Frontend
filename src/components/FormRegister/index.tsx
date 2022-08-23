import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { setToken } from '../../services/setTokenLocalStorage';
import Input from '../Input';

const FormRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const verifyFields = () => {
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const password = passwordRef.current?.value;
    
    return !email?.length
    || !username?.length
    || !firstName?.length
    || !lastName?.length
    || !password?.length;
  };

  const sucessRequest = (response: IResponseAPI) => {
    console.log(response);
    
    const { access_token } = response.data;
    setToken(access_token);
    navigate('/feed');
  };

  const failRequest = (response: IResponseAPI) => {   
    console.log(response.status);
    console.log(response);
    
    if (response.status === 401) setInvalidUser(true);
    else navigate('/deu-ruim');
  };

  const register = async () => {
    const isInvalidFields = verifyFields();

    if(isInvalidFields) {
      setInvalidUser(true);
      setTimeout(() => setInvalidUser(false), 2000);
    } else {
      const email = emailRef.current?.value;
      const username = usernameRef.current?.value;
      const firstName = firstNameRef.current?.value;
      const lastName = lastNameRef.current?.value;
      const password = passwordRef.current?.value;

      const options = createOptionsRequest('POST', {
        email,
        username,
        firstName,
        lastName,
        password,
      }, 'auth/signup');

      const response = await requestAPI(options);

      if (response.error) failRequest(response);
      else sucessRequest(response); 
    }
  };
  
  return (
    <form onSubmit={(event) => event.preventDefault() }>
      <Input
        placeholder='Nome'
        inputRef={ firstNameRef }
        type="text"
        errorMessage="Insira seu nome"
      />

      <Input
        placeholder='Sobrenome'
        inputRef={ lastNameRef }
        type="text"
        errorMessage="Insira seu sobrenome"
      />

      <Input
        placeholder='Usuário'
        inputRef={ usernameRef }
        type="text"
        errorMessage="Insira o nome de usuário"
      />

      <Input
        placeholder='Email'
        inputRef={ emailRef }
        type="text"
        errorMessage="Insira o seu email"
      />

      <Input
        placeholder='Senha'
        inputRef={ passwordRef }
        type="text"
        errorMessage="Insira a senha usada para entrar na conta"
      />

      { invalidUser && <span>Usuário ou senha incorretos</span> }

      <button type="submit" onClick={ register }>Registrar</button>
    </form>
  );
};

export default FormRegister;