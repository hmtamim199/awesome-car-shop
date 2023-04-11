import React from 'react';
import Header from '../Pages/Shares/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shares/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;