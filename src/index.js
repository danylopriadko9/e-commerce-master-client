import React, { Suspense } from 'react';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import ReactDOM from 'react-dom/client';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import Loading from './components/Loading';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <AuthContextProvider>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Provider>
    </AuthContextProvider>
  </HelmetProvider>
);
