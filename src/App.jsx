import React from 'react';
import { useState } from 'react';
import './App.scss'

import routesConfig from './componentes/routing/router-config'; 



import {RouterProvider, Routes, Route } from 'react-router-dom';
import router from './componentes/routing/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
