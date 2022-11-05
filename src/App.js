import React, { useState, useEffect, useMemo } from 'react';
import * as response from './data';
import AppHeader from './component/header/header.component';
import AppLayout from './component/layout/layout.component';
import { AppContext } from './data/app.context';
import './global.scss';

import { useSelector, useDispatch } from 'react-redux';
import {LOAD_DATA,FILTER_BY_TAGS } from './store/root.reducer'


export default function App() {

  const dispatch = useDispatch();
  const loadIniData = ()=>{
    dispatch(LOAD_DATA(response));
  }
 
  useMemo(()=>{
    loadIniData();
  },[]);

  const {questions, tags} = useSelector(state=>state.root);

  const filterItems = (data)=>{
    const tag = data.innerHTML;
    const id = data.id;
    dispatch(FILTER_BY_TAGS({tag,id}));
  }

  const clearFilter = ()=>{
    dispatch(LOAD_DATA(response));
  } 

  const contectObj = {
    questions,
    tags,
    filterItems,
    clearFilter
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
