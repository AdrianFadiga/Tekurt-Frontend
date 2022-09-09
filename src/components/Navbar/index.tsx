import HomeBtn from '../HomeBtn';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import ProfileBtn from '../ProfileBtn';
import { NavStyle } from './style';

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
          <li className="homeBtn"><HomeBtn /></li>
          <li><SearchBar /></li>
          <li><ProfileBtn /></li>
        </ul>
      </nav>
    </NavStyle>
  );
}

export default Navbar;