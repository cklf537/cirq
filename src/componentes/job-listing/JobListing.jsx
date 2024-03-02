import React from 'react';
const JobListing = ()=>{
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Job 1</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Job 2</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Job 3</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
        </div>
    )
};

export default JobListing;
