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
    e.target.style.backgroundColor = 'red';
    setSelectTag([...selectTag, e.target.id]);
    filterItems(e.target);
  }

  const handelClear = ()=>{
    setSelectTag([]);
    clearFilter();
  }

  

  console.log("selectTag", selectTag);

  return (
    <>
      <h3>Filter by tags:</h3>
      {selectTag && selectTag.length > 0 ? <div className='gb-10' onClick={handelClear}>Reset</div> : '' }
      
      {totalTags &&
        totalTags.map((type, i) => (
          <div
            onClick={filterTags}
            className={`tec-tags gr-10 gb-10 `}
            key={i}
            data-id={i}
            id={i} >
            {type.toUpperCase()}
          </div>
        ))}
    </>
  );
};

export default TechTags;
