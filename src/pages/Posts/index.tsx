import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddPost from '../../components/AddPost';
import Navbar from '../../components/Navbar';
import { IPost } from '../../interfaces/IPost';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { PostsStyle } from './style';

const Gallery = () => {
  const {username} = useParams();
  const [userPosts, setUserPosts] = useState<IPost[]>([]);  

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

  return (
    <PostsStyle>
      <Navbar />
      <main>
        <h1>{username ? `Galeria do ${username}` : 'Sua galeria'}</h1>
        { userPosts.map((post) => (
          <div key={post.id}>
            <img src={post.mediaUrl}/>
            <p>{post.content}</p>
          </div>
        ))}
        { !username && <AddPost />}
      </main>
    </PostsStyle>
  );
};

export default Gallery;