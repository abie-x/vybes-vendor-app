import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux'
import store from './store'
import theme from './theme';
import './index.css';
import App from './App';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import Navbar from './components/Navbar';
import Infobar from './components/Infobar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider theme={theme}>
          <Dashboard />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);

