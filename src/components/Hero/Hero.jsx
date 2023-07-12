import './Hero.css';
import foodImage from '../../assets/food/food2.jpeg';

const Hero = () => {
  return (
    <div className='hero-contaner'>
      <div className='hero-text'>
        <h1 className='hero-heading'>Little Lemon</h1>
        <h2 className='hero-sub-heading'>Chicago</h2>
        <p className='hero-paragrah'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve Table</button>
      </div>
      <img src={foodImage} alt='' className='hero-image' />
    </div>
  );
};

export default Hero;
