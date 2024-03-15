import React, { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './JobSearch.scss'
import { AppContect } from '../../data/Context';

const JobSearch = () => {
    const [searchInput, setSearchInput] = useState(null);
    const searchInputValue = useRef();
    const { handleSearch, np } = useContext(AppContect);

    const handleSearchChange = () => {
        setSearchInput(searchInputValue.current.value);
    }

    const handleSearchEvent = () => {
        handleSearch(searchInput)
    }

    return (
        <div className="job-search rounded border px-4">
            <div className="modal fade" id="exampleModalCenteredScrollable" aria-labelledby="exampleModalCenteredScrollableTitle" style={{ "display": "none" }} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="exampleModalCenteredScrollableTitle">Existing Job Opening:</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text"  className="form-control" id="jobtitle" placeholder="Job Title" />
                                <label htmlFor='jobtitle'>Job Title:</label>
                            </div>

                            <div className="form-floating mb-3" >
                                <textarea  className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                                <label htmlFor='floatingTextarea2'>Description: (Max: 6 00 char.)</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="url" placeholder="Url" />
                                <label htmlFor='url'>URL:</label>
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" >Save</button>
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
            <button className="btn btn-info mb-4 rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" >Share an Existing Job Opening</button>

        </div>
    )
};

export default JobSearch;