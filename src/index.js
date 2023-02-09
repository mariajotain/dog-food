import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { UserPage } from './components/UserPage/UserPage';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Basket } from './components/Basket/Basket';
import { Favourite } from './components/Favourite/Favourite';

const queryClient = new QueryClient();

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [

    
    // ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/basket',
    element: <Basket />,
  },
  {
    path: '/favourite',
    element: <Favourite />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={myRouter} />
      </QueryClientProvider>
      </Provider>
  </React.StrictMode>
);
