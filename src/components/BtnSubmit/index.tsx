import React, { ButtonHTMLAttributes } from 'react';
import { BtnStyle } from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  action(): Promise<void> ;
  content: string
}

const BtnSubmit: React.FC<Props> = ({ action, content, ...rest })=>  {
  return (
    <BtnStyle
      onClick={ action }
      { ...rest }
    >
      { content }
    </BtnStyle>
  );
};

export default BtnSubmit;