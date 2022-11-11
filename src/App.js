import './App.scss';
import React from 'react';
import { Header, Footer } from './components';
import {
  Home,
  Cart,
  Contract,
  Admin,
  OrderHistory,
} from './pages';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Contract"
            element={<Contract />}
          ></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route
            path="/OrderHistory"
            element={<OrderHistory />}
          ></Route>
          <Route path="/Admin" element={<Admin />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
