import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  action(): Promise<void> ;
  content: string
}

const BtnSubmit: React.FC<Props> = ({ action, content, ...rest })=>  {
  return (
    <button
      onClick={ action }
      { ...rest }
    >
      { content }
    </button>
  );
};

export default BtnSubmit;