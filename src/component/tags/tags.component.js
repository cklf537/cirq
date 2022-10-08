import React, { useContext } from 'react';
import { AppContext } from '../../data/app.context';
import { getUniqueTags } from '../../util/util';
import './tags.scss';

const TechTags = () => {
  const tags = getUniqueTags(useContext(AppContext));
  const handleMouseOver = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <h3>Filter by tags:</h3>
      {tags &&
        tags.map((type, i) => (
          <div
            onMouseOver={handleMouseOver}
            className="tec-tags"
            key={i}
            data-id={i}
          >
            {type.toUpperCase()}
          </div>
        ))}
    </>
  );
};

export default TechTags;
