import './App.scss';
import React from 'react';
import { Header, Footer } from './components';
import {
  Home,
  Cart,
  Contract,
  Admin,
  OrderHistory,
  Login,
  Register,
  Reset,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/Contract" element={<Contract />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/OrderHistory" element={<OrderHistory />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Reset" element={<Reset />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
