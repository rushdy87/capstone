import './Specials.css';
import { FoodCard } from '../';
import { specials } from '../../data';
const Specials = () => {
  return (
    <div className='specials-container'>
      <div className='specials-heading'>
        <h1>Specials</h1>
        <button>Online Menu</button>
      </div>
      <div className='specials-cards'>
        {specials.map((dish) => (
          <FoodCard key={dish.name} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
