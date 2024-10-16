import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Routerni import qilish
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Router komponentini qo'shing */}
      <App />
    </Router>
  </StrictMode>,
);
