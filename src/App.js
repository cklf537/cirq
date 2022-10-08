import React, { useState, useEffect, useMemo } from 'react';
import './style.css';
import * as response from './data';
import AppHeader from './component/header/header.component';
import AppLayout from './component/layout/layout.component';
import { AppContext } from './data/app.context';
import './global.scss';

export default function App() {
  const [data, setData] = useState(null);
  document.title = '< CIRQ />';
  useMemo(() => {
    setData(response.data);
  }, [response]);

  return (
    <AppContext.Provider value={data}>
      <>
        <AppHeader />
        <AppLayout />
      </>
    </AppContext.Provider>
  );
}
