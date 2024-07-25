import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import router from './router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </CookiesProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
