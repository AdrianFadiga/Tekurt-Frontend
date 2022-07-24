import React, { useState } from 'react';

interface Attributes {
  holder: string
  innerRef: React.RefObject<HTMLInputElement>
  type: string
  errorMessage: string
}

const Input: React.FC<Attributes> = ({ holder, innerRef, type, errorMessage }) => {
  const [invalidField, setInvalidField] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const verifyLengthInput = () => {    
    const value = innerRef.current?.value;
    
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
        type={ type }
        ref={ innerRef }
        placeholder={ holder }
        onFocus={ setFieldStatus }
        onBlur={ verifyLengthInput }
        onInvalid={ (e) => {
          e.preventDefault();
          setInvalidField(true);
        }}
      />

      { invalidField && <span>campo errado</span>}
      { messageError && <span>{ errorMessage }</span> }
    </div>
  );
};

export default Input;