import React, { useState, useEffect, useMemo } from 'react';
import * as response from './data';
import AppHeader from './component/header/header.component';
import AppLayout from './component/layout/layout.component';
import { AppContext } from './data/app.context';
import './global.scss';

import { useSelector, useDispatch } from 'react-redux';
import { LOAD_DATA, FILTER_BY_TAGS } from './store/root.reducer'
import { Router, Route, Routes } from 'react-router';
import Question from './component/question/question.component';
import Home from './component/home/home.component';
import AddQuestion from './component/add-question/addquestion.component';


export default function App() {

  const dispatch = useDispatch();
  const loadIniData = () => {
    dispatch(LOAD_DATA(response));
  }

  useMemo(() => {
    loadIniData();
  }, []);

  const { questions, tags } = useSelector(state => state.root);

  const filterItems = (data) => {
    const tag = data.innerHTML;
    const id = data.id;
    dispatch(FILTER_BY_TAGS({ tag, id }));
  }

  const clearFilter = () => {
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
      <Routes>
        <Route path='iPrepQ/' element={<Home />}>
          <Route index element={<AppLayout />} />
          <Route path='question/:id' element={<Question />} />
          <Route path='addquestions' element={<AddQuestion />} />
          <Route path='newquestions' element={<Question />} />
          <Route path='searchbytag' element={<Question />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
