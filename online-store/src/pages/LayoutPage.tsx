import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ICartLayout } from '../interfase';

function Layout (): JSX.Element {
  return (
    <>
      <Header />
      {/* <main className="container"> */}
      <Outlet />
      {/* </main> */}
      <Footer />
    </>
  );
}
export default Layout;
