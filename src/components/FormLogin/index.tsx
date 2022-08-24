import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { setToken } from '../../services/setTokenLocalStorage';
import { verifyFieldInputs } from '../../services/verifyFieldsInputs';
import BtnSubmit from '../BtnSubmit';
import Input from '../Input';
import { FormStyle } from './style';

function FormLogin() {
  const userInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const sucessRequest = (response: IResponseAPI) => {
    const { access_token } = response.data;
    setToken(access_token);
    navigate('/feed');
  };

  const failRequest = (response: IResponseAPI) => {
    if (response.status === 401) setInvalidUser(true);
    else navigate('/deu-ruim');
  };

  const sigIn = async () => {    
    const isInvalidFields = verifyFieldInputs([userInputRef, passwordInputRef]);

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
    <FormStyle onSubmit={ (event) => event.preventDefault() }>
      <Input
        placeholder='Email ou usuário'
        inputRef={ userInputRef }
        type="text"
        errorMessage="Insira o seu email ou nome de usuario"
        maxLength={ 50 }
      />

      <Input
        placeholder='Senha'
        inputRef={ passwordInputRef }
        type="password"
        errorMessage="Insira a sua senha"
        maxLength={ 50 }
      />

      { invalidUser && <span>Usuário ou senha incorretos</span> }

      <BtnSubmit action={ sigIn } content="Entrar" />
    </FormStyle>
  );
}

export default FormLogin;