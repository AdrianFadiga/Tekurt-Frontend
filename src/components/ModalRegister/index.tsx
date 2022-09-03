import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import FormRegister from '../FormRegister';
import { ModalStyle } from './style';
import { AiOutlineClose } from 'react-icons/ai';

export interface ModalHandles {
  openModal: () => void;
}

const ModalRegister: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal
    };
  });

  if  (!visible) return null;

  return (
    <ModalStyle>
      <button type='button' className='closeModal' onClick={() => setVisible(false) }/>
      <FormRegister setVisible={ setVisible }/>
    </ModalStyle>
  );
};

export default forwardRef(ModalRegister);