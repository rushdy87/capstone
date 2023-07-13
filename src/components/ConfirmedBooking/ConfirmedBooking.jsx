import './ConfirmedBooking.css';
import HeroImage from '../../assets/food/food5.jpeg';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div className='confirmation-container'>
      <header className='confirmation-header'>
        <img
          className='confirmation-image'
          src={HeroImage}
          alt='Little Lemon Ingredients'
        />
        <h1 className='confirmation-heading'>Your Reservation is Confirmed!</h1>
        <h3 className='confirmation-sub-heading'>
          A confirmation message has been sent to your email.
        </h3>
        <h3 className='confirmation-sub-heading'>Thanks for dining with us!</h3>
      </header>
      <Link className='confirmation-button' to='/'>
        Home Page
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
