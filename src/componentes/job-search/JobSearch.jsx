import React, { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './JobSearch.scss'
import { AppContect } from '../../data/Context';

const JobSearch = () => {
    const [searchInput, setSearchInput] = useState(null);
    const [jobTitle, setjobTitle] = useState(null);
    const [jobDescription, setJobDescription] = useState(null);
    const [jobLink, setJobLink] = useState(null);
    const searchInputValue = useRef();
    const inputJobTitle = useRef();
    const inputJobDescription = useRef();
    const inputJobLink = useRef();
    const { handleSearch } = useContext(AppContect);


    const handleSearchChange = () => {
        // const searchVal = searchInputValue.current.value;
        setjobTitle(inputJobTitle.current.value);
        setJobDescription(inputJobDescription.current.value);
        setJobLink(inputJobLink.current.value);
        setSearchInput(searchInputValue.current.value);
    }

    const handleShareJobPost = ()=>{
        console.log(jobTitle);
        // handleShareJobPost({
        //     jobTitle,
        //     jobDescription,
        //     jobLink
        // })
    }

    const handleSearchEvent = () => {
        // console.log("SearchInput", searchInput);
        handleSearch(searchInput)
    }

    return (
        <div className="job-search rounded border px-4">
            {/* <form> */}
                <div className="modal fade" id="exampleModalCenteredScrollable" aria-labelledby="exampleModalCenteredScrollableTitle" style={{ "display": "none" }} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <h1 className="modal-title fs-5" id="exampleModalCenteredScrollableTitle">Existing Job Opening:</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" ref={inputJobTitle} className="form-control" id="jobtitle" placeholder="Job Title" />
                                    <label htmlFor='jobtitle'>Job Title:</label>
                                </div>

                                <div className="form-floating mb-3" >
                                    <textarea ref={inputJobDescription} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                                    <label htmlFor='floatingTextarea2'>Description: (Max: 6 00 char.)</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" ref={inputJobLink} className="form-control" id="url" placeholder="Url" />
                                    <label htmlFor='url'>URL:</label>
                                </div>
                            </div>
                            <div className="modal-footer border-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleShareJobPost}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </form> */}
            {/* <form> */}
                <div className="row rounded py-4">
                    <div className="col">
                        <input type="Search" ref={searchInputValue} onChange={handleSearchChange} className="form-control" id="searchInputField" aria-describedby="SearcInputField" placeholder='Explore...' />
                    </div>
                </div>
                <button className="btn btn-info mb-4 rounded-pill mx-2" onClick={handleSearchEvent}  >Search Jobs</button>
            {/* </form> */}
            <button className="btn btn-info mb-4 rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" >Share an Existing Job Opening</button>

        </div>
    )
};

export default JobSearch;