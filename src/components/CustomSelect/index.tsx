import { IoIosArrowDown } from 'react-icons/io';
import { IOptionBio } from '../../interfaces';
import { CustomSelectStyle } from './style';

interface Props {
  options?: IOptionBio[]
  binaryOption?: boolean[]
  defaultValue: string | boolean | undefined
  setOption: React.Dispatch<React.SetStateAction<any | undefined>>
}

const CustomSelect: React.FC<Props> = ({ options, defaultValue, binaryOption, setOption }) => {
  const handleClick = ({ target }: any) => {    
    if(binaryOption) setOption(target.id === 'Sim' ? true : false);
    else setOption(Number(target.id));
  };

  return (
    <CustomSelectStyle className='selectRel'>
      <div>
        <p>{ binaryOption
          ? (
            defaultValue ? 'Sim' : 'Não'
          )
          : defaultValue
        }</p>
        <IoIosArrowDown />
      </div>                
      <input type="checkbox" />
      <div className='options'>
        {options?.map(({ id, option }) => (
          <div onClick={ handleClick } id={ String(id) } key={id}>{ option }</div>
        ))}

        { binaryOption?.map((value) => (
          <div onClick={ handleClick } id={value ? 'Sim' : 'Não' } key={value ? 'Sim' : 'Não'}>{ value ? 'Sim' : 'Não' }</div>
        ))}
      </div>
    </CustomSelectStyle>
  );
};

export default CustomSelect;