import React from 'react';
import './header.scss';
import TechTags from '../tags/tags.component';
import { NavLink } from 'react-router-dom';
const AppHeader = () => {
  return (
    <header className="appHeader">
      <section className="app-heading">
        <section>
          <h1>{`iPrepQ`}</h1>
          <h2> Interview Questions, Prepration & more...</h2>
        </section>
        <section className='app-heading-menu'>
          <NavLink to="/iPrepq/addquestions">
            <span class="material-symbols-outlined" alt="Add Question">
              post_add
            </span></NavLink>
          <NavLink to="/iPrepQ">
            <span class="material-symbols-outlined" alt="List all questions">
              question_mark
            </span></NavLink>
          <NavLink to="/iPrepq/newquestions">
            <span class="material-symbols-outlined" alt="View newly posted Question">
              fiber_new
            </span></NavLink>
          <NavLink to="/iPrepq/searchbytag">
            <span class="material-symbols-outlined" alt="Search By Tags">
              sell
            </span></NavLink>
        </section>
      </section>
      <section className="header-tags">
        <TechTags />
      </section>
    </header>
  );
};

export default AppHeader;
