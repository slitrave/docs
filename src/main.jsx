import React from 'react';
import ReactDOM from 'react-dom/client';
import Documentation from './Documentation'; // Imports your main component
import './index.css'; // Imports your global Tailwind styles

// Locate the root element and render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Documentation />
  </React.StrictMode>,
);