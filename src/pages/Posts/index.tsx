import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../interfaces/IPost';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

const Gallery = () => {
  const {username} = useParams();
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const userId = '12345';
  
  const getPosts = async () => {
    // Criar função para buscar o userId com base no username
    const token = localStorage.getItem('authTekurt');
    const fetchUrl = username ? `posts/${userId}` : 'posts/me'; 
    const options = createOptionsRequest('GET', {}, fetchUrl, {authorization: `Bearer ${token}`});
    const response = await requestAPI<IPost[]>(options);
    setUserPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, [username]);

  return (
    <section>
      <h1>{username ? `Galeria do ${username}` : 'Sua galeria'}</h1>
      {userPosts.map((post) => (
        <div key={post.id}>
          <img src={post.mediaUrl}/>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Gallery;