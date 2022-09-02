import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

const Links = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className={
            darkMode
              ? ' border-b-2 border-gray-900 text-blue-300 focus:border-blue-200 pb-2'
              : 'border-b-2 text-blue-700  focus:border-blue-700 pb-2'
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
