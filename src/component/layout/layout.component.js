import React from 'react';
import './layout.scss';
import RenderQestion from '../questions/questions.component';
import TechTags from '../tags/tags.component';
import Badge from '../badge/badge.component';
import AddQuestion from '../add-question/addquestion.component';

const AppLayout = () => {
  return (
    <section className="main-body">
      <section className="left-content">
        {/* <input type="text"  /> */}
        <AddQuestion />
        <RenderQestion />
      </section>
      <section className="right-content">
        {/* <Badge /> */}
        <TechTags />
      </section>
    </section>
  );
};

export default AppLayout;
