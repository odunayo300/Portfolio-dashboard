import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About'
import NotFoundPage from './Pages/NotFoundPage';
import { Provider } from './components/ui/Provider';
import './index.css';
import Layout from './Component/Layout';
// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: 
     <Layout> <Dashboard /> </Layout>,
    errorElement:<NotFoundPage/>
  },
  {
    path: '/about',
    element:<Layout> <About /> </Layout> , // Example route
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


