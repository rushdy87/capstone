import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt='Little Lemon' />
      </div>
      <div>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>reservations</a>
          </li>
          <li>
            <a href='/'>order online</a>
          </li>
          <li>
            <a href='/'>login</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Chicago stret no 10 first bulding</p>
        <p>+000000000</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div>
        <p>facebook</p>
        <p>instgram</p>
        <p>linkedin</p>
      </div>
    </footer>
  );
};

export default Footer;
