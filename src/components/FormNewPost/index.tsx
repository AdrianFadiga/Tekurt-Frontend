import { useEffect, useState } from 'react';
import { IPost } from '../../interfaces/IPost';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

function FormNewPost() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
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
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="file" 
          name="sampleFile" 
          onChange={({target}) => setSelectedFile(target.files[0])}
        />
        <input 
          type="text" 
          onChange={({target}) => setContent(target.value)}
          value={content}
        />
        <button
          onClick={() => createPost()}
          disabled={isDisabled}
        >
            Submit
        </button>          
      </form>
      {
        fileSizeError &&
          <h1>O arquivo não pode exceder 5MB</h1>
      }
      {
        fileTypeError &&
          <h1>O arquivo deve ser uma imagem</h1>
      }
    </section>
    
  );
}

export default FormNewPost;