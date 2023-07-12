import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Logo from '../../assets/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={Logo} alt='Little Lemon' className='header-logo' />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
