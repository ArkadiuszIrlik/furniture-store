import React from 'react';
import ReactDOM from 'react-dom/client';
import { register } from 'swiper/element/bundle';
import App from './App.tsx';
import './index.css';

register();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
