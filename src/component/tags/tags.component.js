import React, { useContext } from 'react';
import { AppContext } from '../../data/app.context';
import { getUniqueTags } from '../../util/util';
import './tags.scss';

import {FILTER_BY_TAGS} from '../../store/root.reducer';
import { useDispatch } from 'react-redux';

const TechTags = () => {
  const { questions, filterItems } = useContext(AppContext);
  const {data} = questions;
  const tags = getUniqueTags(data);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Filter by tags:</h3>
      {tags &&
        tags.map((type, i) => (
          <div
            onClick={(e)=>{filterItems(e.target.innerHTML)}}
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
