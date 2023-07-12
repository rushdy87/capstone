import { Link } from 'react-router-dom';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import Nav from '../Nav/Nav';
import './Footer.css';
import Logo from '../../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-logo'>
        <img src={Logo} alt='Little Lemon' />
      </div>
      <div>
        <Nav />
      </div>
      <div className='contact-container'>
        <div className='address'>
          <p>Chicago stret no 10 first bulding</p>
          <p>+187200000</p>
          <p>contact@littlelemon.com</p>
          <div className='social-media'>
            <Link to='https://www.facebook.com/'>
              <Facebook fontSize='large' />
            </Link>
            <Link to='https://twitter.com/'>
              <Twitter fontSize='large' />
            </Link>
            <Link to='https://www.linkedin.com/'>
              <LinkedIn fontSize='large' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
