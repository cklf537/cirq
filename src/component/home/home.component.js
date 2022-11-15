import React from "react";
import '../layout/layout.scss';
import { Outlet } from "react-router";
import AppHeader from "../header/header.component";
import './home.scss'

const Home = () => {
    return <section className="container" >
        <section id="header">
            <AppHeader />
        </section>
        <section className="main-body">
            <Outlet />
        </section>
    </section>
}

export default Home;