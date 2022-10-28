import React, { useState, useEffect, useMemo } from 'react';
// import './style.scss';
import * as response from './data';
import AppHeader from './component/header/header.component';
import AppLayout from './component/layout/layout.component';
import { AppContext } from './data/app.context';
import './global.scss';

import { useSelector, useDispatch } from 'react-redux';
import {LOAD_DATA,FILTER_BY_TAGS } from './store/root.reducer'


export default function App() {
  /*
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
  */

  const dispatch = useDispatch();
  const loadIniData = ()=>{
    dispatch(LOAD_DATA(response));
  }
 
  useMemo(()=>{
    loadIniData();
  },[]);

  const {questions} = useSelector(state=>state.root);

  const filterItems = (data)=>{
    dispatch(FILTER_BY_TAGS(data));
  }

  const contectObj = {
    questions,
    filterItems
  }


  return (
    <AppContext.Provider value={contectObj}>
      <>
        <AppHeader />
        <AppLayout />
      </>
    </AppContext.Provider>
  );
}
