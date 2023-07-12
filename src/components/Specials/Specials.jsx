import './Specials.css';
import { FoodCard } from '../';
import { Bruschetta, GreekSalad, LemonDessert } from '../../assets';

const specials = [
  {
    name: 'Greek salad',
    price: 12.9,
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
    image: GreekSalad,
  },
  {
    name: 'Bruchetta',
    price: 9.9,
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: Bruschetta,
  },
  {
    name: 'Lemon Dessert',
    price: 5,
    desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: LemonDessert,
  },
];
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
