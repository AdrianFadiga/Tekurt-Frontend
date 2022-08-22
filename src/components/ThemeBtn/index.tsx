import { useContext } from 'react';
import { IContext, MyContext } from '../../context/MyContext';

const ThemeBtn = () => {
  const { toggleTheme } = useContext(MyContext) as IContext;

  return (
    <button type="button" onClick={ toggleTheme }>trocar tema</button>
  );
};

export default ThemeBtn;