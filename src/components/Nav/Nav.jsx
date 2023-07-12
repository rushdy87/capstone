import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-items'>
        <li className='nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to='/menu'>Menu</Link>
        </li>
        <li className='nav-item'>
          <Link to='/reservations'>reservations</Link>
        </li>
        <li className='nav-item'>
          <Link to='/order-online'>order online</Link>
        </li>
        <li className='nav-item'>
          <Link to='/login'>login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
