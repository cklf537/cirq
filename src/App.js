import React, { useState, useEffect, useMemo } from 'react';
// import './style.scss';
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

  const filterByTags = (e)=>{
    const filterQuestions = data.filter(question=>{
      return question.type.includes(e.target.innerHTML)
    })
    setData(filterQuestions);
  }

  const dataOBJ = {
    filterByTags,
    data
  }

  return (
    <AppContext.Provider value={dataOBJ}>
      <>
        <AppHeader />
        <AppLayout />
      </>
    </AppContext.Provider>
  );
}
