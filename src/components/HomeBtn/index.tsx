import { useNavigate } from 'react-router-dom'
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

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