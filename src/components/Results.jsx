import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import {
  useLazyGetResultsQuery,
  useLazyGetImagesQuery,
  useLazyGetNewsQuery,
  useLazyGetVideosQuery,
} from '../services/searchApi';
import Loading from './Loading';

const Results = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const searchTerm = useSelector((state) => state.mode.searchTerm);
  const location = useLocation();

  const [search, setSearch] = useState();
  const [images, setImages] = useState();
  const [news, setNews] = useState();
  const [videos, setVideos] = useState();

  const [getSearch, { isFetching: searchFetch }] =
    useLazyGetResultsQuery(searchTerm);
  const [getImage, { isFetching: imgFetch }] =
    useLazyGetImagesQuery(searchTerm);
  const [getNews, { isFetching: newsFetch }] = useLazyGetNewsQuery(searchTerm);
  const [getVideos, { isFetching: videoFetch }] =
    useLazyGetVideosQuery(searchTerm);

  useEffect(() => {
    getSearch(searchTerm).then((data) => setSearch(data));
    getImage(searchTerm).then((data) => setImages(data));
    getNews(searchTerm).then((data) => setNews(data));
    getVideos(searchTerm).then((data) => setVideos(data));
  }, [searchTerm, location.pathname]);

  if (searchFetch || imgFetch || newsFetch || videoFetch) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {search?.data?.results?.map(({ link, title }, index) => (
            <div key={index} className=" md:w-2/5 w-full ">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p
                  className={
                    darkMode
                      ? 'text-lg hover:underline dark:text-blue-300 text-blue-700'
                      : 'text-lg  hover:underline  text-blue-700'
                  }
                >
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {images?.data?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {news?.data?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer "
                className="hover:underline "
              >
                <p
                  className={
                    darkMode
                      ? 'text-lg  dark:text-blue-300 text-blue-700'
                      : 'text-lg    text-blue-700'
                  }
                >
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {' '}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          {videos?.data?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return 'Error...';
  }
};

export default Results;
