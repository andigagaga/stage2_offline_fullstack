import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom';
import RootReducer from './Store/rootReducer.ts';
import { configureStore } from '@reduxjs/toolkit';

const client = new QueryClient();

const store = configureStore({
  reducer: RootReducer
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
    </ChakraProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)