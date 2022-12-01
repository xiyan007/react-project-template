import React from 'react';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import About from '@pages/About';
import Counter from '@pages/Counter';
import NotFound from '@pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/counter', element: <Counter /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
