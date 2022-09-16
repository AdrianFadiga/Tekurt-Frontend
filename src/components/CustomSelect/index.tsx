import { useContext } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IContext, MyContext } from '../../context/MyContext';
import { ISocialStatus } from '../../interfaces';
import { CustomSelectStyle } from './style';

interface Props {
  options: string[]
  defaultValue: string | undefined
}

const CustomSelect: React.FC<Props> = ({ options, defaultValue }) => {
  return (
    <CustomSelectStyle className='selectRel'>
      <div>
        <p>{ defaultValue }</p>
        <IoIosArrowDown />
      </div>                
      <input type="checkbox" />
      <div className='options'>
        {options.map((value) => (
          <div key={value}>{ value }</div>
        ))}
      </div>
    </CustomSelectStyle>
  );
};

export default CustomSelect;