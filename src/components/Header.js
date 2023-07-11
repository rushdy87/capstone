import Nav from './Nav';
import Logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt='Little Lemon' />
      <Nav />
    </header>
  );
};

export default Header;
