import { useEffect, useState } from 'react';
import { IoImage } from 'react-icons/io5';
import { IPost } from '../../interfaces/IPost';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { FormPostStyle } from './style';

interface Props {
  setModal: () => void
}

const FormNewPost: React.FC<Props> = ({ setModal }) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [srcPreview, setSrcPreview] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const createPost = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('POST', {
      content: content,
      file: selectedFile,
    }, 'posts', {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`});
    await requestAPI<IPost[]>(options);
    window.location.reload();
  };

  const readImage = (target: any) => {
    setSelectedFile(target.files[0]);
    
    const file = new FileReader();

    file.onload = (e) => {
      console.log(e.target?.result);
      
      setSrcPreview(e.target?.result as string);
    };

    file.readAsDataURL(target.files[0]);
  };

  useEffect(() => {
    validateImage();
  }, [selectedFile]);

  const validateImage = () => {
    const FIVE_MB = 5000000;
    const validate = (
      !selectedFile?.type.includes('image') 
      || selectedFile?.size > FIVE_MB
    );
    setIsDisabled(validate);
    if (selectedFile) {
      setFileSizeError(selectedFile.size > FIVE_MB);
      setFileTypeError(!selectedFile.type.includes('image'));
    }
  };

  return (
    <FormPostStyle>
      <button className="emptyModal" onClick={ setModal }/>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='contentPost'>
          { selectedFile ? (
            <>
              <input 
                type="text" 
                onChange={({target}) => setContent(target.value)}
                value={content}
                placeholder="No que você está pensando?"
                maxLength={ 150 }
              />

              <button
                onClick={() => createPost()}
                disabled={isDisabled}
                className="submitPost"
              >
                Publicar
              </button> 
            </>                      
          ) : <h1>Nova publicação</h1>}
        </div>

        <label className="inputImage">
          { selectedFile ? (
            <div className="preview" style={{backgroundImage: `url(${ srcPreview })`}}/>
          ) : (
            <>
              <IoImage />
              <p>Selecionar Imagem</p>
              <input 
                type="file" 
                name="sampleFile" 
                onChange={({target}) => readImage(target)}
              />
            </>
          )}
        </label>     
      </form>
      {
        fileSizeError &&
          <h1>O arquivo não pode exceder 5MB</h1>
      }
      {
        fileTypeError &&
          <h1>O arquivo deve ser uma imagem</h1>
      }
    </FormPostStyle>    
  );
};

export default FormNewPost;