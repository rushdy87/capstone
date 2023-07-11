import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/reservations' element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
