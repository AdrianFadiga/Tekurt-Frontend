import React, { InputHTMLAttributes, useState } from 'react';
import { InputStyle } from './style';
import ErrorMessage from '../ErrorMessage';
import { ShowPass } from './ShowPass';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  errorMessage: string,
  inputRef: React.RefObject<HTMLInputElement>
}

const Input: React.FC<Props> = ({ errorMessage, inputRef, ...rest }) => {
  const [invalidField, setInvalidField] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const verifyLengthInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {    
    const { value } = target;
    
    setMessageError(false);
    setInvalidField(!value?.length);
  };

  const setFieldStatus = () => {    
    if (invalidField) {
      setMessageError(true);
      setInvalidField(false);
    } else {
      setMessageError(false);
      setInvalidField(false);      
    }
  };

  const changeType = () => {
    const type = inputRef.current?.type;
    if (inputRef.current) {
      const newType = type === 'text'
        ? 'password'
        : 'text';
      
      inputRef.current.type = newType;
      setShowPass(!showPass);
    }
  };

  return (
    <InputStyle invalidField={ invalidField }>
      <input
        required
        ref={ inputRef }
        onFocus={ setFieldStatus }
        onBlur={ verifyLengthInput }
        onInvalid={ (e) => {
          e.preventDefault();
          setInvalidField(true);
        }}
        { ...rest }
      />

      { rest.type === 'password' && (
        <ShowPass type="button" onClick={ changeType }>
          { showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }          
        </ShowPass>
      ) }

      { messageError && <ErrorMessage content={ errorMessage } /> }
    </InputStyle>
  );
};

export default Input;