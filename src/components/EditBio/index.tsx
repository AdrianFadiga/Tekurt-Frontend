import { useContext, useEffect, useState } from 'react';
import { IContext, MyContext } from '../../context/MyContext';
import { IOptions, IOptionBio } from '../../interfaces';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import { BioCardStyle } from '../BioCard/style';
import CustomSelect from '../CustomSelect';

interface Props {
  editBio: React.Dispatch<React.SetStateAction<boolean>>
}

const editBio: React.FC<Props> = ({ editBio }) => {
  const {profileInfo} = useContext(MyContext) as IContext;
  const [socialStatus, setSocialStatus] = useState<IOptionBio[]>([]);
  const [signs, setSigns] = useState<IOptionBio[]>([]);
  const [drinking, setDrinking] = useState<IOptionBio[]>([]);

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
              <CustomSelect
                setOption={ setSocialStatusId }
                options={ socialStatus }
                defaultValue={ socialStatus?.find(({ id }) => id === socialStatusId)?.option }/>
            </td>
          </tr>
          <tr>
            <td>Crianças:</td>
            <td>
              <CustomSelect
                setOption={ setChildren }
                binaryOption={ [true, false] }
                defaultValue={ children }
              />
            </td>
          </tr>
          <tr>
            <td>Fuma:</td>
            <td>
              <CustomSelect
                setOption={ setSmokes }
                binaryOption={ [true, false] }
                defaultValue={ smokes }
              />
            </td>
          </tr>
          <tr>
            <td>Bebe:</td>
            <td>
              <CustomSelect
                setOption={ setDrinkingId }
                options={ drinking }
                defaultValue={ drinking?.find(({ id }) => id === drinkingId)?.option}
              />
            </td>
          </tr>
          <tr>
            <td>Signo:</td>
            <td>
              <CustomSelect
                setOption={ setSignId }
                options={ signs }
                defaultValue={ signs?.find(({ id }) => id === signId)?.option}
              />
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className='btns-edit'>
        <button onClick={() => editProfile()}>Salvar</button>
        <button onClick={() => editBio(false)}>Cancelar</button>
      </div>
    </BioCardStyle>
  );
};

export default editBio;