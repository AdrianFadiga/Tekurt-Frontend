import HomeBtn from '../HomeBtn';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import ProfileBtn from '../ProfileBtn';

function Navbar() {
  return (
    <header>
      <Logo />
      <HomeBtn />
      <SearchBar />
      <ProfileBtn />
    </header>
  );
}

export default Navbar;