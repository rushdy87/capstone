import './About.css';
import { FoodOne, FoodTwo } from '../../assets';

const About = () => {
  return (
    <section className='about-container'>
      <div className='text'>
        <h1 className='about-heading'>Little Lemon</h1>
        <h2 className='about-sub-heading'>Chicago</h2>
        <p className='about-paragrah'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{' '}
        </p>
      </div>
      <div className='images'>
        <img src={FoodOne} alt='food' className='first-img' />
        <img src={FoodTwo} alt='food' className='second-img' />
      </div>
    </section>
  );
};

export default About;
