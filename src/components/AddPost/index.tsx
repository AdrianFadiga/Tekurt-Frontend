import { useState } from 'react';
import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs';
import FormNewPost from '../FormNewPost';
import { AddPostStyle } from './style';

interface Props {
  className: string
}

const AddPost: React.FC<Props> = ({ className }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AddPostStyle className={ className }>
      <button onClick={ setModal }>
        <BsPlusSquare />
      </button>

      { openModal && <FormNewPost setModal={ setModal }/> }
    </AddPostStyle>
  );
};

export default AddPost;