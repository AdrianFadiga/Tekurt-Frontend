import React, { forwardRef, InputHTMLAttributes, useState } from 'react';

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
    <div>
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

      { invalidField && <span>campo errado</span>}
      { messageError && <span>{ errorMessage }</span> }
    </div>
  );
};

export default forwardRef(Input);