import Logo from '../assets/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt='Little Lemon' />
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Menu</a>
        </li>
        <li>
          <a href='#'>reservations</a>
        </li>
        <li>
          <a href='#'>order online</a>
        </li>
        <li>
          <a href='#'>login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
