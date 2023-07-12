import StarRateIcon from '@mui/icons-material/StarRate';
import './TestimonialCard.css';
const TestimonialCard = ({ testimonial }) => {
  const randerRating = (rating) => {
    let rateStars = [];
    for (let i = 1; i <= rating; i++) {
      rateStars.push(<StarRateIcon fontSize='small' sx={{ color: 'gold' }} />);
    }
    return rateStars;
  };
  return (
    <div key={testimonial.name} className='testimonial'>
      <span className='name'>{testimonial.name}</span>
      <span>{randerRating(testimonial.rating)}</span>
      <span>{testimonial.description}</span>
    </div>
  );
};

export default TestimonialCard;
