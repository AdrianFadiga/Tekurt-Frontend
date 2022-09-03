import { useParams, useNavigate } from 'react-router-dom';

const ProfileOptions = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(`/friends/${username || ''}`)}
      >
        Amigos
      </button>
      <button
        type="button"
      >
        Depoimentos
      </button>
      <button
        type="button"
      >
        Início
      </button>
      <button
        type="button"
      >
        Galeria
      </button>
      <button
        type="button"
      >
        Jogos
      </button>
    </div>
  );
};

export default ProfileOptions;