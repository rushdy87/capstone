import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import { submitAPI } from '../../utils/bookingsAPI';

const Form = ({ availableTimes, updateTimes }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    date: '',
    occasion: '',
    preferences: '',
    comments: '',
  });

  const { name, email, phone, people, date, occasion, preferences, comments } =
    formData;

  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option key={times}>{times}</option>)
  );
  const handleChang = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  function handleDateChange(e) {
    setFormData((prev) => ({ ...prev, date: e.target.value }));

    var stringify = e.target.value;
    const date = new Date(stringify);

    updateTimes(date);

    setFinalTime(availableTimes.map((times) => <option>{times}</option>));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    if (submitAPI) {
      navigate('/confirmation');
      setFormData({
        name: '',
        email: '',
        phone: '',
        people: 1,
        date: '',
        occasion: '',
        preferences: '',
        comments: '',
      });
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='name input'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={handleChang}
          required
        />
      </div>
      <div className='email input'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChang}
          required
        />
      </div>
      <div className='phone input'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          name='phone'
          id='phone'
          value={phone}
          onChange={handleChang}
          required
        />
      </div>
      <div className='number-of-people input'>
        <label htmlFor='people'>Number Of People</label>
        <input
          type='number'
          name='people'
          id='people'
          value={people}
          onChange={handleChang}
          required
        />
      </div>
      <div className='date input'>
        <label htmlFor='date'>Select Date</label>
        <input
          type='date'
          name='date'
          id='date'
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className='time input'>
        <label htmlFor='time'>Select Time</label>
        <select id='time' name='time' required>
          {finalTime}
        </select>
      </div>
      <div className='occasion input'>
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          name='occasion'
          value={occasion}
          onChange={handleChang}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      <div className='preferences input'>
        <label htmlFor='preferences'>Seating preferences</label> <br></br>
        <select
          id='preferences'
          name='preferences'
          value={preferences}
          onChange={handleChang}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>
      <div className='comments'>
        <label htmlFor='comments'>Additional Comments</label> <br></br>
        <textarea
          id='comments'
          name='comments'
          placeholder='Additional Comments'
          value={comments}
          onChange={handleChang}
        ></textarea>
      </div>
      <p>
        Note: You cannot edit your reservation after submission. Please
        double-check your answer before submitting your reservation request.
      </p>
      <button type='submit'>Book Table</button>
    </form>
  );
};

export default Form;
