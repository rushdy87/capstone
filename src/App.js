import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
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
        </Routes>
      </div>
    </>
  );
}

export default App;
