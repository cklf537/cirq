import React, { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../data/app.context';
import { getUniqueTags } from '../../util/util';
import './tags.scss';

import { FILTER_BY_TAGS, LOAD_DATA } from '../../store/root.reducer';
import { useDispatch } from 'react-redux';

const TechTags = () => {
  const { questions, tags, filterItems, clearFilter } = useContext(AppContext);
  const { totalTags, activeTags } = tags;
  const [selectTag, setSelectTag] = useState([]);

  const filterTags = (e) => {
    setSelectTag([...selectTag, e.target.id]);
    filterItems(e.target);
  }

  const handelClear = ()=>{
    setSelectTag([]);
    clearFilter();
  }

  // console.log("selectTag", totalTags);

  return (
    <>
      <h3>Filter by tags:</h3>
      {selectTag && selectTag.length > 0 ? <div className='gb-10 btn-liniked' onClick={handelClear}>Reset</div> : '' }
      
      {totalTags &&
        totalTags.map((type, i) => (
          <div
            onClick={filterTags}
            className={`tec-tags ${type.active === true ? 'active-tag' : ''} gr-10 gb-10 `}
            key={i}
            data-id={i}
            id={i} >
            {type.title.toUpperCase()}
          </div>
        ))}
    </>
  );
};

export default TechTags;
