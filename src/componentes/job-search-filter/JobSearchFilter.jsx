import React from 'react';
const JobSearchFilter = ()=>{
    return(
        <section className="row">
            <section className="col">
                <h4>Job Openings:</h4>
            </section>
            <section className="col d-flex justify-content-end">
                <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Most recent</a></li>
                    <li><a className="dropdown-item" href="#">Top trending</a></li>
                </ul>
                </div>
            </section>
        </section>
    )
};

export default JobSearchFilter;