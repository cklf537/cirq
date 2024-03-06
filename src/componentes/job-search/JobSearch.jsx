import React, {memo, useMemo, useRef, useState} from 'react';
import './JobSearch.scss'

const JobSearch = () => {

    const [searchJobs, setSearchJobs] = useState(null);
    const searchInput = useRef();
    // const [subitJobs, setsubitJobs] = useState(null);
    


    const handleSearchJob = ()=>{
        console.log(searchInput.current.value);
    }


    const handleSubmitJob = ()=>{
        console.log("Search Jobs...");
        
    }

    useMemo(()=>{
        setSearchJobs(searchInput.current);
    },[searchInput])


    return (
        <div className="job-search rounded border px-4">
            <div className="modal fade" id="exampleModalCenteredScrollable" aria-labelledby="exampleModalCenteredScrollableTitle" style={{"display": "none"}} aria-hidden="true">
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
            
            <form>
                <div className="row rounded py-4">
                    <div className="col">
                        <input type="Search" ref={searchInput} onChange={handleSearchJob} className="form-control" id="searchInputField" aria-describedby="SearcInputField" placeholder='Explore...' />
                    </div>
                </div>
                <button type="submit" className="btn btn-info mb-4 rounded-pill mx-2" onClick={handleSearchJob}>Search Jobs</button>
                <button type="submit" className="btn btn-info mb-4 rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" onClick={handleSubmitJob}>Share Job Opening</button>
            </form>
        </div>
    )
};

export default memo(JobSearch);