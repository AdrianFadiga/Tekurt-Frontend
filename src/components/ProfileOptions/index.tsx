import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IContext, MyContext } from '../../context/MyContext';
import { IFriend } from '../../interfaces/IFriend';
import { IUser } from '../../interfaces/IUser';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import FriendBtn from '../FriendBtn';

interface Props {
  user: IUser
}

const ProfileOptions: React.FC<Props> = ({user}) => {
  const [invited, setInvited] = useState<boolean>(true);
  const { profileImg } = useContext(MyContext) as IContext;
  const { username } = useParams();
  const navigate = useNavigate();
  const loggedId = profileImg?.id;
  const verifyInvite = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, `friend/${user.id}`, {authorization: `Bearer ${token}`});
    const {data} = await requestAPI<IFriend[]>(options);
    const invited = data.some((f) => f.friendId === loggedId);
    setInvited(invited);
  };
  const inviteOrDelete = async () => {
    const token = localStorage.getItem('authTekurt');
    const action = invited ? 'DELETE' : 'POST';
    const options = createOptionsRequest(action, {}, `friend/${user.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    setInvited(!invited);
  };
  
  useEffect(() => {
    verifyInvite();
  }, [user]);

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(`/friends/${username || ''}`)}
      >
        Amigos
      </button>
      {
        username && user.id !== loggedId &&
      <FriendBtn
        content={invited ? 'Desfazer amizade' : 'Convite de amizade'}
        action={() => inviteOrDelete()}>
      </FriendBtn>
      }
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
        onClick={() => navigate(`/posts/${username || ''}`)}
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