import React from 'react';
import { useState } from 'react';
import './App.scss'

import Header from './componentes/header/Header';
import LeaderBoard from './componentes/leader-board/LeaderBoard';
import JobSearch from './componentes/job-search/JobSearch';
import JobListing from './componentes/job-listing/JobListing';
import JobSearchFilter from './componentes/job-search-filter/JobSearchFilter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <section className="row">
        <section className="col"><Header /></section>
      </section>
      <section className="row">
        <section className="col-sm-12 col-md-12 col-xl">
          <section className="row">
            <section className="col"> <LeaderBoard /></section>
          </section>
          <section className="row">
            <section className="col">
              <JobSearch />
            </section>
          </section>
          {/* <section className="row">
            <section className="col">
              <JobSearchFilter />
            </section>
          </section> */}
          <section className="row">
            <section className="col">
              <JobSearchFilter />
              <JobListing />
            </section>
          </section>
        </section>
        <section className="col-xl-3 col-sm-12 col-md-12">&nbsp;</section>
      </section>


    </div>
  )
}

export default App
