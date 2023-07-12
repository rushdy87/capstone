import { useState } from 'react';
import { Form } from '../components';

const Reservations = () => {
  const [reserveData, setReserveData] = useState({});

  const handleReservations = (data) => {
    setReserveData(data);
  };

  console.log(reserveData);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Reservations</h1>
      <Form handleReservations={handleReservations} />;
    </>
  );
};

export default Reservations;
