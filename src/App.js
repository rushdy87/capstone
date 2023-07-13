import { Route, Routes } from 'react-router-dom';
import { ConfirmedBooking, Footer, Header } from './components';
import {
  About,
  Homepage,
  Login,
  Menu,
  OrderOnline,
  Reservations,
} from './pages';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order-online' element={<OrderOnline />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/confirmation' element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
