import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

import App from './App.tsx';
import AppContextProvider from './context/AppContextProvider.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppContextProvider>
        <App />
      </AppContextProvider>
    ),
  },
  {
    path: '/*',
    loader: () => redirect('/'),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
