import React, { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './JobSearch.scss'
import { AppContect } from '../../data/Context';

const JobSearch = () => {
    const [searchInput, setSearchInput] = useState(null);
    const searchInputValue = useRef();
    const {handleSearch} = useContext(AppContect);

    const handleSearchChange = ()=>{
        const searchVal = searchInputValue.current.value;
        setSearchInput(searchVal);
    }

    const handleSearchEvent = ()=>{
        // console.log("SearchInput", searchInput);
        handleSearch(searchInput)
    }

    return (
        <div className="job-search rounded border px-4">
            <div className="modal fade" id="exampleModalCenteredScrollable" aria-labelledby="exampleModalCenteredScrollableTitle" style={{ "display": "none" }} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalCenteredScrollableTitle">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                            <p>Just like that.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row rounded py-4">
                <div className="col">
                    <input type="Search" ref={searchInputValue} onChange={handleSearchChange} className="form-control" id="searchInputField" aria-describedby="SearcInputField" placeholder='Explore...' />
                </div>
            </div>
            <button className="btn btn-info mb-4 rounded-pill mx-2" onClick={handleSearchEvent}  >Search Jobs</button>
            <button className="btn btn-info mb-4 rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" >Share Job Opening</button>

        </div>
    )
};

export default JobSearch;