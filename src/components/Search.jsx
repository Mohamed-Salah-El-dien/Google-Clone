import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { reduxActions } from '../services/reduxSlice';
import Links from './Links';

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('google');
  const [debouncedValue] = useDebounce(text, 300);
  const darkMode = useSelector((state) => state.mode.darkMode);

  useEffect(() => {
    if (debouncedValue) dispatch(reduxActions.setSearchTerm(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-12 mt-3">
      <input
        value={text}
        type="text"
        placeholder="🔎 Search Bingo or type URL"
        onChange={(e) => setText(e.target.value)}
        className={
          darkMode
            ? 'sm:w-96 w-80 h-10 bg-white border rounded shadow-sm outline-none p-6 mb-2 text-black hover:shadow-lg'
            : 'sm:w-96 w-80 h-10 bg-black border rounded shadow-sm outline-none p-6 mb-2 text-white hover:shadow-lg'
        }
      />

      {text !== '' && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText('')}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
