import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import PagesComposing from './pages/pagesComposing';
import Login from './pages/Registration&Login/Login';
import Register from './pages/Registration&Login/Register';
import React from 'react';
import LanguagePopup from './components/LanguagePopup';
import CompagePage from './pages/ComparePage';
import CategoriesPage from './pages/CategoriesPage';
import { useDispatch } from 'react-redux';
import { fetchCurrency } from './redux/Slicess/cartSlice2';
import Breadcrumbs from './components/Breadcrumbs';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  const [cartStatus, setCartStatus] = React.useState(false);
  const [languageStatus, setLanguageStatus] = React.useState(false);
  return (
    <>
      <LanguagePopup
        languageStatus={languageStatus}
        setLanguageStatus={setLanguageStatus}
      />
      <Cart cartStatus={cartStatus} setCartStatus={setCartStatus} />
      <Header
        cartStatus={cartStatus}
        setCartStatus={setCartStatus}
        setLanguageStatus={setLanguageStatus}
        languageStatus={languageStatus}
      />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/compare',
        element: <CompagePage />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/:url',
        element: <PagesComposing />,
      },

      // {
      //   path: '/search/:searchValue',
      //   element: <SearchPage />,
      // },
      // {
      //   path: '/admin',
      //   element: <AdminOutlet />,
      //   children: [
      //     {
      //       path: '/admin/product/:id',
      //       element: <UpdateProduct />,
      //     },
      //     {
      //       path: '/admin/product',
      //       element: <UpdateProduct />,
      //     },
      //     {
      //       path: '/admin/category',
      //       element: <UpdateCategory />,
      //     },
      //     {
      //       path: '/admin/users',
      //       element: <Users />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCurrency());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
