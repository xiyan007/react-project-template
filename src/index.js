import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import stores from './stores';
import { routes } from './routers';

const router = createHashRouter(routes);
// const router = createBrowserRouter(routes);
createRoot(document.getElementById('app')).render(
  <Provider store={stores}>
    <RouterProvider router={router} />
  </Provider>,
);
