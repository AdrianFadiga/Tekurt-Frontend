import { LogoStyle } from './style';
import React from 'react';

interface Props {
  navbar?: boolean
}

const Logo: React.FC<Props> = ({ navbar }) => {
  return (
    <LogoStyle navbar={ navbar }>tekurt</LogoStyle>
  );
};

export default Logo;