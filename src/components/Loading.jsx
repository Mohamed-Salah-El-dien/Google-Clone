import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loading = () => (
  <div className="flex justify-center items-center ">
    <CirclesWithBar type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);

export default Loading;
