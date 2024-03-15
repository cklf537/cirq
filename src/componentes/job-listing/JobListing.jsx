import React, { useContext } from 'react';
import './JobListing.scss';
import { AppContect } from '../../data/Context';

const JobListing = () => {

    const {jobListings, filteredPosts} = useContext(AppContect);
    return (
        <div className="list-group">
            {
                filteredPosts && filteredPosts.map((jobpost ,i)=>(
                    <section className="job-list-wrapper" key={i}>
                    <a href="#" className="list-group-item border-0" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="mb-3">{jobpost.title}</h4>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">{jobpost.body}</p>
                        {/* <small>And some small print.</small> */}
                    </a>
                    <div className="socialShare d-flex justify-content-end">
                        <p>Shared by: {jobpost.userId}</p>
                        <button type="button" className="btn btn-sm">
                            <span className="material-symbols-outlined text-secondary">
                                share
                            </span>
                        </button>
                        <button type="button" className="btn btn-sm">
                            <span className="material-symbols-outlined text-secondary">
                                comment
                            </span>
                        </button>
                    </div>
                </section>
                ))
            }
        </div>
    )
};

export default JobListing;
