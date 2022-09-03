import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import ThemeBtn from '../ThemeBtn';

function HomeBtn() {
  return (
    <Link
      to="/home"
    >
      <MdHomeFilled />
    </Link>
  );
}

export default HomeBtn;