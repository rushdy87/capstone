import { testimonials } from '../../data';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';
function Testimonials() {
  return (
    <section className='testimonials'>
      <h1 className='testimonials-heading'>Testimonials</h1>
      <div className='testimonials-items'>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
