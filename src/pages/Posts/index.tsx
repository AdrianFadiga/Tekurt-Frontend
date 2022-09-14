import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { IPost } from '../../interfaces/IPost';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

const Gallery = () => {
  const {username} = useParams();
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [content, setContent] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);

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

  const getUserId = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, `users/${username}`, 
      {authorization: `Bearer ${token}`});
    const {data: {id}} = await requestAPI<IUser>(options);
    return id;
  };
  
  const getPosts = async () => {
    let userId;
    if (username) userId = await getUserId();
    const token = localStorage.getItem('authTekurt');
    const fetchUrl = username ? `posts/user/${userId}` : 'posts/me'; 
    const options = createOptionsRequest('GET', {}, fetchUrl, {authorization: `Bearer ${token}`});
    const response = await requestAPI<IPost[]>(options);
    setUserPosts(response.data);  
  };
  
  useEffect(() => {
    getPosts();
  }, [username]);

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

  useEffect(() => {
    validateImage();
  }, [selectedFile]);


  return (
    <section>
      {/* <Navbar /> */}
      <h1>{username ? `Galeria do ${username}` : 'Sua galeria'}</h1>
      {userPosts.map((post) => (
        <div key={post.id}>
          <img src={post.mediaUrl}/>
          <p>{post.content}</p>
        </div>
      ))}
      { !username &&
      <div>
        <h1>Adicionar publicação</h1>
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
      </div>
      }
    </section>
  );
};

export default Gallery;