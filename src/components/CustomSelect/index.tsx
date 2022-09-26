import React from 'react';
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

  const resetInputs = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const initalState = target?.checked;
    const inputs = document.querySelectorAll('#input-option') as NodeListOf<HTMLInputElement>;
    inputs.forEach((input) => input.checked = false);
    target.checked = initalState;    
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

      <input id="input-option" type="checkbox" onChange={ resetInputs } />
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