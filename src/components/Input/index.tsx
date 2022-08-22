import React, { ForwardRefRenderFunction, forwardRef, InputHTMLAttributes, useState } from 'react';
import { InputStyle } from './style';
// import { IoAlertCircleOutline } from 'react-icons/io5';
import ErrorMessage from '../ErrorMessage';

interface Attributes extends InputHTMLAttributes<HTMLInputElement>{
  errorMessage: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Attributes> = ({ errorMessage, ...rest }, ref) => {
  const [invalidField, setInvalidField] = useState(false);
  const [messageError, setMessageError] = useState(false);

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

  const teste = () => {
    const { type } = ref.current;
    ref.current.type = type === 'text' ? 'password' : 'text';
  };

  return (
    <InputStyle invalidField={ invalidField }>
      <input
        required
        ref={ ref }
        onFocus={ setFieldStatus }
        onBlur={ verifyLengthInput }
        onInvalid={ (e) => {
          e.preventDefault();
          setInvalidField(true);
        }}
        { ...rest }
      />

      {/* { invalidField && <IoAlertCircleOutline /> } */}
      <button onClick={ teste }>mostrar senha</button>
      { messageError && <ErrorMessage content={ errorMessage } /> }
    </InputStyle>
  );
};

export default forwardRef(Input);