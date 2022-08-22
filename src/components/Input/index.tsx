import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { InputStyle } from './style';
import { IoAlertCircleOutline } from 'react-icons/io5';
import ErrorMessage from '../ErrorMessage';

interface Attributes extends InputHTMLAttributes<HTMLInputElement>{
  errorMessage: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Attributes> = ({ errorMessage, ...rest }, ref) => {
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
      { messageError && <ErrorMessage content={ errorMessage } /> }
    </InputStyle>
  );
};

export default forwardRef(Input);