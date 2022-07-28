import Footer from './components/Footer';
import  Navbar  from './components/Navbar';
import { Outlet } from 'react-router';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
         <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App;
