import LeaderBoard from '../../../componentes/leader-board/LeaderBoard';
import JobSearch from '../../../componentes/job-search/JobSearch';
import JobListing from '../../../componentes/job-listing/JobListing';
import JobSearchFilter from '../../../componentes/job-search-filter/JobSearchFilter';
import Footer from '../../../componentes/footer/Footer';
const LandingPage = ()=>{

    return <>
        <section className="row">
            <section className="col-sm-12 col-md-12 col-xl">
                <section className="row">
                    <section className="col"> <LeaderBoard /></section>
                </section>
                <section className="row">
                    <section className="col">
                        <JobSearch />
                    </section>
                </section>
                <section className="row">
                    <section className="col">
                        <JobSearchFilter />
                        <JobListing />
                    </section>
                </section>
            </section>
            <section className="col-xl-3 col-sm-12 col-md-12">&nbsp;</section>
            <section className="row">
                <section className="col d-flex justify-content-end">
                    <Footer />
                </section>
            </section>
        </section>
    </>
};

export default LandingPage;