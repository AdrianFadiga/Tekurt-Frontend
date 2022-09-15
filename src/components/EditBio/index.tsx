import { useContext, useEffect, useState } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import { IDrinking, IOptions, ISign, ISocialStatus } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { BioCardStyle } from '../BioCard/style';

const editBio = () => {
  const {profileInfo} = useContext(MyContext) as IContext;
  const [socialStatus, setSocialStatus] = useState<ISocialStatus[]>([]);
  const [signs, setSigns] = useState<ISign[]>([]);
  const [drinking, setDrinking] = useState<IDrinking[]>([]);

  const getOptions = async () => {
    const options = createOptionsRequest('GET', {}, 'options');
    const response = await requestAPI<IOptions>(options);
    setDrinking(response.data.drinking);
    setSigns(response.data.signs);
    setSocialStatus(response.data.socialStatus);
  };
  useEffect(() => {
    getOptions();
  }, []);

  const [biography, setBiography] = useState<string | undefined>(profileInfo?.biography);
  const [socialStatusId, setSocialStatusId] = useState<number | undefined>(profileInfo?.socialStatusId);
  const [signId, setSignId] = useState<number | undefined>(profileInfo?.signId);
  const [drinkingId, setDrinkingId] = useState<number | undefined>(profileInfo?.drinkingId);
  const [children, setChildren] = useState<boolean | undefined>(profileInfo?.children);
  const [smokes, setSmokes] = useState<boolean | undefined>(profileInfo?.smokes);

  const editProfile = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('PUT', {
      biography, socialStatusId, signId, drinkingId, children, smokes 
    }, 'users/me', {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };

  return (
    <BioCardStyle>
      <h2>Bio</h2>
      <table>
        <tbody>
          <tr>
            <td>Sobre mim:</td>
            <td>
              <textarea 
                onChange={({target}) => setBiography(target.value)}
                value={biography}
              />
            </td>
          </tr>
          <tr>
            <td>Relacionamento:</td>
            <td>
              <select
                onChange={({target}) => setSocialStatusId(Number(target.value))}>
                {socialStatus.map(({id, status}) => (
                  <option
                    selected={profileInfo?.socialStatusId === id}
                    value={id} 
                    key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Crianças:</td>
            <td>
              <select
                onChange={({target}) => setChildren(target.value === 'true')}
              >
                <option 
                  value="true"
                  selected={children}
                >Sim</option>
                <option 
                  value="false"
                  selected={!children}
                >Não</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Fuma:</td>
            <td>
              <select
                onChange={({target}) => setSmokes(target.value === 'true')}
              >
                <option 
                  value="true"
                  selected={smokes}
                >Sim</option>
                <option 
                  value="false"
                  selected={!smokes}
                >Não</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Bebe:</td>
            <td>
              <select
                onChange={({target}) => setDrinkingId(Number(target.value))}>
                {drinking.map(({id, option}) => (
                  <option
                    selected={drinkingId === id}
                    value={id} 
                    key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Signo:</td>
            <td>
              <select
                onChange={({target}) => setSignId(Number(target.value))}>
                {signs.map(({id, sign}) => (
                  <option
                    selected={profileInfo?.signId === id}
                    value={id} 
                    key={sign}>
                    {sign}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => editProfile()}>Salvar</button>
    </BioCardStyle>
  );
};

export default editBio;