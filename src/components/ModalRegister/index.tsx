import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import Input from '../Input';
import { setToken } from '../../services/setTokenLocalStorage';

const ModalRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const failRequest = (response: IResponseAPI) => {
    if (response.status === 409) {
      setInvalidUser(true);
      setTimeout(() => setInvalidUser(false), 2000);
    } else navigate('/deu-ruim');
  };

  const successRequest = (response: IResponseAPI) => {
    const { access_token } = response.data;
    setToken(access_token);
    navigate('/feed');
  };

  const register = async () => {
    const isValidFields = formRef.current?.checkValidity()
      && passwordRef.current?.value === passwordConfirmationRef.current?.value;

    if(isValidFields) {
      const options = createOptionsRequest('POST', {
        email: emailRef.current?.value,
        username: usernameRef.current?.value,
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        password: passwordRef.current?.value,
      }, 'auth/signup');

      const response = await requestAPI(options);

      if (response.error) failRequest(response);
      else successRequest(response);
    }
  };
  
  return (
    <form ref={ formRef } onSubmit={(event) => event.preventDefault() }>
      <Input
        placeholder='Nome'
        inputRef={ firstNameRef }
        type="text"
        errorMessage="Insira seu nome de no mínimo 3 caracteres"
        maxLength={ 20 }
        minLength={ 3 }
      />

      <Input
        placeholder='Sobrenome'
        inputRef={ lastNameRef }
        type="text"
        errorMessage="Insira seu sobrenome de no mínimo 3 caracteres"
        maxLength={ 30 }
        minLength={ 3 }
      />

      <Input
        placeholder='Usuário'
        inputRef={ usernameRef }
        type="text"
        errorMessage="Insira o nome de usuário de no mínimo 3 caracteres"
        maxLength={ 20 }
        minLength={ 3 }
      />

      <Input
        placeholder='Email'
        inputRef={ emailRef }
        type="email"
        errorMessage="Insira um formato de email válido"
        maxLength={ 50 }
        minLength={ 1 }
      />

      <Input
        placeholder='Senha'
        inputRef={ passwordRef }
        type="password"
        errorMessage="Insira uma senha de no mínimo 6 caracteres"
        maxLength={ 30 }
        minLength={ 6 }
      />

      <Input
        placeholder='Confirme a senha'
        inputRef={ passwordConfirmationRef }
        comparationInput={ passwordRef }
        type="password"
        errorMessage="Repita a senha"
        maxLength={ 30 }
        minLength={ 6 }
      />

      { invalidUser && <span>Usuário ou email já está em uso</span> }

      <button type="submit" onClick={ register }>Registrar</button>
    </form>
  );
};

export default ModalRegister;