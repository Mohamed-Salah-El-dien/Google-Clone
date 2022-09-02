import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reduxActions } from '../services/reduxSlice';
import Search from './Search';

const Navbar = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reduxActions.toggleMode());
  };

  return (
    <div
      className={
        darkMode
          ? 'p-5 pb-0 flex flex-wrap  sm:justify-between justify-center items-center border-b  border-gray-200  '
          : 'p-5 pb-0 flex flex-wrap  sm:justify-between justify-center items-center border-b border-gray-700   '
      }
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p
            className={
              darkMode
                ? 'text-4xl font-bold text-white py-1 px-2 rounded mb-2'
                : 'text-4xl  font-bold text-black py-1 px-2 rounded mb-2'
            }
          >
            Bingo 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={handleClick}
          className={
            darkMode
              ? 'text-xl text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg mb-2'
              : 'text-xl text-white bg-gray-900 border rounded-full px-2 py-1 hover:shadow-lg mb-2'
          }
        >
          {darkMode ? '💡 Light' : '🌙 Dark'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
