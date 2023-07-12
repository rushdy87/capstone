import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import './FoodCard.css';

const FoodCard = ({ dish }) => {
  return (
    <div className='card-container'>
      <img src={dish.image} alt={dish.name} />
      <div className='name-and-price'>
        <span>{dish.name}</span>
        <span>{dish.price}</span>
      </div>
      <div className='desc'>{dish.desc}</div>
      <div className='order-now'>
        <span>Order a delivery</span>
        <DeliveryDiningIcon />
      </div>
    </div>
  );
};

export default FoodCard;
