import { useReducer } from 'react';
import { Form } from '../components';
import { fetchAPI } from '../utils/bookingsAPI';

const Reservations = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Reservations</h1>
      <Form availableTimes={availableTimes} updateTimes={dispatch} />;
    </>
  );
};

export default Reservations;
