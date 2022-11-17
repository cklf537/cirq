import React from "react";
import { NavLink } from 'react-router-dom';
import "./right-nav.scss";

const RightNavigation = () => {
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
        <NavLink to="/iPrepq/searchbytag">
            <span className="material-symbols-outlined" alt="Search By Tags">
                sell
            </span>
        </NavLink>
    </>
}

export default RightNavigation;