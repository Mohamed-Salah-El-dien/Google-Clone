import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Results from './Results';

export const Pages = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/" element={<Navigate to="/search" replace />} />
      <Route exact path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </Routes>
  </div>
);
