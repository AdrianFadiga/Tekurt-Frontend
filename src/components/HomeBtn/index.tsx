import { useNavigate } from 'react-router-dom';

function HomeBtn() {
  const navigate = useNavigate(); 

  return (
    <button
      type="button"
      onClick={() => navigate('/home')}
    >
      Home button
    </button>
  );
}

export default HomeBtn;