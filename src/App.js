import React from 'react';
import Navbar from './components/Navbar';
import { Pages } from './components/Pages';
import { Footer } from './components/Footer';
import { useSelector } from 'react-redux';

const App = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <div
      className={
        darkMode
          ? 'bg-black text-white min-h-screen '
          : 'bg-gray-100 text-black min-h-screen'
      }
    >
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
};

export default App;
