import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/reservations'>reservations</Link>
        </li>
        <li>
          <Link to='/order-online'>order online</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
