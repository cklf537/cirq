import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (<>
        <section className="row">
            <section className="col"><Header /></section>
        </section>
        <Outlet />
    </>);
};

export default Home;