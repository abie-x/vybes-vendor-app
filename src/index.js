import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import theme from './theme';
import './index.css';
import App from './App';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
        <Sidebar />
    </NextUIProvider>
  </React.StrictMode>
);

