import {useNavigate} from 'react-router-dom';
function Feed() {
  const navigate = useNavigate();
  return (
    <button
      type='button'
      onClick={() => navigate('/home')
      }>Home</button>

  );
}

export default Feed;