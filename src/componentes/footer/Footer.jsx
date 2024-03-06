import React from 'react';

import './footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = ()=>{
    return (
        <>
            <section className="ipq-footer">

            <p> &#169; </p>
            <p>|</p>
            <p>
                <NavLink to="/privacy">Privacy</NavLink> </p>
            </section>
        </>
    )
};

export default Footer;
