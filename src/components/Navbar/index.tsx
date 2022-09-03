import HomeBtn from '../HomeBtn';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import ProfileBtn from '../ProfileBtn';
import { NavStyle } from './style';
import ThemeBtn from '../ThemeBtn';

function Navbar() {
  return (
    <NavStyle>
      <div className='logo'>
        <div className='circle'>
          <span />
        </div>
        <Logo navbar={ true }/>
      </div>
      <nav>
        <ul>
          <li><HomeBtn /></li>
          <li><SearchBar /></li>
          <li><ProfileBtn /></li>
        </ul>
      </nav>
    </NavStyle>
  );
}

export default Navbar;