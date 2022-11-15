import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Provider } from 'react-redux';
import { AppStore } from './store/app.store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={AppStore}>    
        <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
