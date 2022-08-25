import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseAPI } from '../../interfaces/IResponseAPI';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import Input from '../Input';
import { setToken } from '../../services/setTokenLocalStorage';
import FormRegister from '../FormRegister';

export interface ModalHandles {
  openModal: () => void;
}

const ModalRegister: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal
    };
  });

  const handleClick = () => {
    setVisible(false);
  };
  
  if  (!visible) return null;

  return (
    <section>
      <button onClick={ handleClick }>Fechar modal</button>
      <FormRegister />
    </section>
  );
};

export default forwardRef(ModalRegister);