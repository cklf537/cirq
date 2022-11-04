import React, { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../data/app.context';
import { getUniqueTags } from '../../util/util';
import './tags.scss';

import { FILTER_BY_TAGS } from '../../store/root.reducer';
import { useDispatch } from 'react-redux';

const TechTags = () => {
  const { questions, tags, filterItems } = useContext(AppContext);
  const { totalTags, activeTags } = tags;
  // const tags = getUniqueTags(data);

  // const _tags = [...tags];

  const filterTags = (e) => {
    filterItems(e.target);
  }


  // console.log("activeTag", activeTag);
  return (
    <>
      <h3>Filter by tags:</h3>
      {totalTags &&
        totalTags.map((type, i) => (

          <div
            onClick={filterTags}
            className={`${activeTags && parseInt(activeTags[i]) == i ? 'activeTag ' : 'tec-tags'}  gr-10 gb-10`}
            key={i}
            data-id={i}
            id={i}
          >
            {type.toUpperCase()}
          </div>
        ))}
    </>
  );
};

export default TechTags;
