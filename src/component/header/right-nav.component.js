import React from "react";
import { NavLink } from 'react-router-dom';
import "./right-nav.scss";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_FILTERS } from "../../store/header.reducer";

const RightNavigation = () => {
    const {displayTags} = useSelector(state=>state.header);
    const dispatch = useDispatch();
    const showFilters = ()=>{
        dispatch(SHOW_FILTERS());
    }
    return <>
        <NavLink to="/iPrepq/addquestions">
            <span className="material-symbols-outlined" alt="Add Question">
                post_add
            </span>
        </NavLink>
        <NavLink to="/iPrepQ">
            <span className="material-symbols-outlined" alt="List all questions">
                question_mark
            </span>
        </NavLink>
        <NavLink to="/iPrepq/newquestions">
            <span className="material-symbols-outlined" alt="View newly posted Question">
                fiber_new
            </span>
        </NavLink>
        <span className="material-symbols-outlined" alt="Search By Tags" onClick={showFilters}>
                sell
        </span>
        {/* <NavLink to="/iPrepq/searchbytag">
            <span className="material-symbols-outlined" alt="Search By Tags">
                sell
            </span>
        </NavLink> */}
    </>
}

export default RightNavigation;