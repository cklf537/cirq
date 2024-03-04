import React from 'react';
import './JobListing.scss';
const JobListing = () => {
    return (
        <div className="list-group">
            <section className="job-list-wrapper">
                <a href="#" className="list-group-item border-0" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className="mb-3">Frontend React Developer</h4>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui illum, eos obcaecati facilis laborum. Ex sapiente doloribus, modi cum, eligendi quidem a accusamus totam ab numquam provident suscipit obcaecati.</p>
                    {/* <small>And some small print.</small> */}
                </a>
                <div className="socialShare d-flex justify-content-end">
                    <p>Shared by: anonymous</p>
                    <button type="button" class="btn btn-sm">
                        <span class="material-symbols-outlined text-secondary">
                            share
                        </span>
                    </button>
                    <button type="button" class="btn btn-sm">
                        <span class="material-symbols-outlined text-secondary">
                            comment
                        </span>
                    </button>
                </div>
            </section>
            <section className="job-list-wrapper">
                <a href="#" className="list-group-item border-0" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className="mb-3">Frontend React Developer</h4>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui illum, eos obcaecati facilis laborum. Ex sapiente doloribus, modi cum, eligendi quidem a accusamus totam ab numquam provident suscipit obcaecati.</p>
                    {/* <small>And some small print.</small> */}
                </a>
                <div className="socialShare d-flex justify-content-end">
                    <p>Shared by: anonymous</p>
                    <button type="button" class="btn btn-sm">
                        <span class="material-symbols-outlined text-secondary">
                            share
                        </span>
                    </button>
                    <button type="button" class="btn btn-sm">
                        <span class="material-symbols-outlined text-secondary">
                            comment
                        </span>
                    </button>
                </div>
            </section>
            <section className="job-list-wrapper">
                <a href="#" className="list-group-item border-0" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className="mb-3">Frontend React Developer</h4>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui illum, eos obcaecati facilis laborum. Ex sapiente doloribus, modi cum, eligendi quidem a accusamus totam ab numquam provident suscipit obcaecati.</p>
                    {/* <small>And some small print.</small> */}
                </a>
                <div className="socialShare d-flex justify-content-end">
                    <p>Shared by: anonymous</p>
                    <button type="button" class="btn btn-sm">
                        <span class="material-symbols-outlined text-secondary">
                            share
                        </span>
                    </button>
                    <button type="button" class="btn btn-sm">
                        <span class="material-symbols-outlined text-secondary">
                            comment
                        </span>
                    </button>
                </div>
            </section>
        </div>
    )
};

export default JobListing;
