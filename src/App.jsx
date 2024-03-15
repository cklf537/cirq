import React, { useEffect, useMemo, useReducer } from 'react';
import { useState } from 'react';
import './App.scss'

import routesConfig from './componentes/routing/router-config'; 
import {RouterProvider, Routes, Route } from 'react-router-dom';
import router from './componentes/routing/Router';
import { AppContect } from './data/Context';
import { initialState } from './data/menu';
import axios from 'axios';

const reducer = (state, action)=>{
  const {jobListing} = initialState;
  switch(action.type){
    case "FETCH_DATE":
      return {
        ...state,
        jobListings: action.payload,
        filteredPosts: action.payload
      }
    case "SEARCH_JOBS":
      const filteredPosts = state.jobListings.filter((post) =>
          action.payload != null ? post.title.toLowerCase().includes(action.payload.toLowerCase()) : state
      );
      return {
        ...state,
        filteredPosts
      }
    default:
        return state
  }
}

function App() {
  console.log("App")
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>dispatch(
      {
        type: "FETCH_DATE",
        payload: response.data
      }))
    .catch(error=>console.log(error))
  },[])

  initialState.handleSearch = (searchInput)=>{
    dispatch({
      type: "SEARCH_JOBS",
      payload: searchInput
    })
  }

  return (
    <div className='container'>
        <AppContect.Provider value={state}>
          <RouterProvider router={router} />
        </AppContect.Provider>
    </div>
  )
}

export default App
