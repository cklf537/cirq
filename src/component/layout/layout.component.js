import React from 'react';
import './layout.scss';
import RenderQestion from '../questions/questions.component';
import TechTags from '../tags/tags.component';

const AppLayout = () => {
  return (
    <section className="main-body">
      <section className="left-content">
        <RenderQestion />
      </section>
      <section className="right-content">
        <TechTags />
      </section>
    </section>
  );
};

export default AppLayout;
