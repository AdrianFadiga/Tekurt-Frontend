import { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IContext, MyContext } from '../../context/MyContext';
import { IDrinking, IOptions, ISign, ISocialStatus } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { BioCardStyle } from '../BioCard/style';
import CustomSelect from '../CustomSelect';

interface Props {
  editBio: React.Dispatch<React.SetStateAction<boolean>>
}

const editBio: React.FC<Props> = ({ editBio }) => {
  const {profileInfo} = useContext(MyContext) as IContext;
  const [socialStatus, setSocialStatus] = useState<ISocialStatus[]>([]);
  const [signs, setSigns] = useState<ISign[]>([]);
  const [drinking, setDrinking] = useState<IDrinking[]>([]);

  const getOptions = async () => {
    const options = createOptionsRequest('GET', {}, 'options');
    const response = await requestAPI<IOptions>(options);
    console.log(response);    
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
      <div className='headerBio'>
        <h2>Bio</h2>
      </div>      
      <table>
        <tbody>
          <tr>
            <td>Sobre mim:</td>
            <td>
              <textarea 
                onChange={({target}) => setBiography(target.value)}
                value={biography}
                maxLength={ 300 }
              />
            </td>
          </tr>
          <tr>
            <td>Relacionamento:</td>
            <td>
              <CustomSelect options={ socialStatus.map((a) => a.status) } defaultValue={ profileInfo?.socialStatus.status }/>
              {/* <label className='selectRel'>
                <div>
                  <p>{ profileInfo?.socialStatus.status }</p>
                  <IoIosArrowDown />
                </div>                
                <input type="checkbox" />
                <div className='options'>
                  {socialStatus.map(({id, status}) => (
                    <div key={id}>{status}</div>
                  ))}
                </div>
              </label> */}
              {/* <select
                onChange={({target}) => setSocialStatusId(Number(target.value))}>
                {socialStatus.map(({id, status}) => (
                  <option
                    selected={profileInfo?.socialStatusId === id}
                    value={id} 
                    key={status}>
                    {status}
                  </option>
                ))}
              </select> */}
            </td>
          </tr>
          <tr>
            <td>Crianças:</td>
            <td>
              <CustomSelect options={ ['Sim', 'Não'] } defaultValue="Sim" />
              {/* <select
                onChange={({target}) => setChildren(target.value === 'true')}
              >
                <option 
                  value="true"
                  selected={children}
                >
                  Sim
                </option>

                <option 
                  value="false"
                  selected={!children}
                >Não</option>
              </select> */}
            </td>
          </tr>
          <tr>
            <td>Fuma:</td>
            <td>
              <CustomSelect options={ ['Sim', 'Não'] } defaultValue="Sim" />
              {/* <select
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
              </select> */}
            </td>
          </tr>
          <tr>
            <td>Bebe:</td>
            <td>
              <CustomSelect options={ drinking.map((a => a.option)) } defaultValue={ profileInfo?.drinking.option } />
              {/* <select
                onChange={({target}) => setDrinkingId(Number(target.value))}>
                {drinking.map(({id, option}) => (
                  <option
                    selected={drinkingId === id}
                    value={id} 
                    key={option}>
                    {option}
                  </option>
                ))}
              </select> */}
            </td>
          </tr>
          <tr>
            <td>Signo:</td>
            <td>
              <CustomSelect options={ signs.map((a => a.sign)) } defaultValue={ profileInfo?.sign.sign } />
              {/* <select
                onChange={({target}) => setSignId(Number(target.value))}>
                {signs.map(({id, sign}) => (
                  <option
                    selected={profileInfo?.signId === id}
                    value={id} 
                    key={sign}>
                    {sign}
                  </option>
                ))}
              </select> */}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => editProfile()}>Salvar</button>
      <button onClick={() => editBio(false)}>Cancelar</button>
    </BioCardStyle>
  );
};

export default editBio;