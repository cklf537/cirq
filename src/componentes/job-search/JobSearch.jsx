
import './JobSearch.scss'

const JobSearch = () => {
    return (
        <div className="job-search rounded border px-4">
            <form>
                <div className="row rounded py-4">
                    <div className="col">
                        <input type="Search" className="form-control" id="searchInputField" aria-describedby="SearcInputField" placeholder='Explore...' />
                    </div>
                </div>
                <button type="submit" className="btn btn-info mb-4 rounded-pill mx-2">Search Jobs</button>
                <button type="submit" className="btn btn-info mb-4 rounded-pill mx-2">Share Job Opening</button>
            </form>
        </div>
    )
};

export default JobSearch;