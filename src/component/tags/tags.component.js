import React, { useContext } from 'react';
import { AppContext } from '../../data/app.context';
import { getUniqueTags } from '../../util/util';
import './tags.scss';

const TechTags = () => {
  const {data, filterByTags} = useContext(AppContext);
  const tags = getUniqueTags(data);
  
  return (
    <>
      <h3>Filter by tags:</h3>
      {tags &&
        tags.map((type, i) => (
          <div
            onClick={filterByTags}
            className="tec-tags gr-10 gb-10"
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
