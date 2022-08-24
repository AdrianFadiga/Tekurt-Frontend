import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { verifyFieldInputs } from '../../services/verifyFieldsInputs';
import Input from '../Input';
import { setToken } from '../../services/setTokenLocalStorage';

const ModalRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
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

  const veryfyFields = () => {
    const isInvalidLengthFields = verifyFieldInputs(
      [emailRef, usernameRef, firstNameRef, lastNameRef, passwordRef]
    );

    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isValidEmail = regexEmail.test(emailRef.current?.value || '');    

    const isInvalidFields = [isInvalidLengthFields, !isValidEmail]
      .some((errorCase) => errorCase);

    return isInvalidFields;
  };

  const register = async () => {
    const isInvalidFields = veryfyFields();

    if(!isInvalidFields) {
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
    <form onSubmit={(event) => event.preventDefault() }>
      <Input
        placeholder='Nome'
        inputRef={ firstNameRef }
        type="text"
        errorMessage="Insira seu nome"
        maxLength={ 20 }
      />

      <Input
        placeholder='Sobrenome'
        inputRef={ lastNameRef }
        type="text"
        errorMessage="Insira seu sobrenome"
        maxLength={ 30 }
      />

      <Input
        placeholder='Usuário'
        inputRef={ usernameRef }
        type="text"
        errorMessage="Insira o nome de usuário"
        maxLength={ 20 }
      />

      <Input
        placeholder='Email'
        inputRef={ emailRef }
        type="email"
        errorMessage="Insira um formato de email válido"
        maxLength={ 50 }
      />

      <Input
        placeholder='Senha'
        inputRef={ passwordRef }
        type="password"
        errorMessage="Insira a senha usada para entrar na conta"
        maxLength={ 30 }
      />

      { invalidUser && <span>Usuário ou email já está em uso</span> }

      <button type="submit" onClick={ register }>Registrar</button>
    </form>
  );
};

export default ModalRegister;