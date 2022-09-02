import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { setToken } from '../../services/setTokenLocalStorage';
import { ErrorType } from '../../types/ErrorType';
import { Token } from '../../types/Token';
import BtnSubmit from '../BtnSubmit';
import Input from '../Input';
import { FormStyle } from './style';

function FormLogin() {
  const userInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const sucessRequest = (response: Token) => {
    const { access_token } = response;
    setToken(access_token);
    navigate('/home');
  };

  const failRequest = (response: ErrorType) => {    
    if (response.statusCode === 403) {
      setInvalidUser(true);
      setTimeout(() => setInvalidUser(false), 2000);
    } else navigate('/deu-ruim');
  };

  const sigIn = async () => {    
    const isValidFields = formRef.current?.checkValidity();

    if(!isValidFields) {
      setInvalidUser(true);
      setTimeout(() => setInvalidUser(false), 2000);
    } else {
      const user = userInputRef.current?.value;
      const password = passwordInputRef.current?.value;

      const options = createOptionsRequest('POST', { user, password }, 'auth/signin');
      
      const {data, error} = await requestAPI<Token>(options);

      if (error) failRequest(data as unknown as ErrorType);
      else sucessRequest(data);
    }
  };

  return (
    <FormStyle ref={ formRef } onSubmit={ (event) => event.preventDefault() }>
      <Input
        placeholder='Email ou usuário'
        inputRef={ userInputRef }
        type="text"
        errorMessage="Insira o seu email ou nome de usuario"
        maxLength={ 50 }
        minLength={ 1 }
      />

      <Input
        placeholder='Senha'
        inputRef={ passwordInputRef }
        type="password"
        errorMessage="Insira a sua senha"
        minLength={ 1 }
      />

      { invalidUser && <span>Usuário ou senha incorretos</span> }

      <BtnSubmit action={ sigIn } content="Entrar" />
    </FormStyle>
  );
}

export default FormLogin;