import React from 'react';
import './header.scss';
import TechTags from '../tags/tags.component';
const AppHeader = () => {
  return (
    <header className="appHeader">
      <section className="app-heading">
        <h1>{`< iPrepQ />`}</h1>
        <h2> Interview Prepration, Questions & more...</h2>
      </section>
      <section className="header-tags">
        <TechTags />
      </section>
    </header>
  );
};

export default AppHeader;
