import React from "react";
// import { Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout (): JSX.Element {
  return (
    <>
      <Header/>
      <main className="container">
         {/* <Outlet/> */}
      </main>
      <Footer/>
    </>
  );
}
export default Layout;
