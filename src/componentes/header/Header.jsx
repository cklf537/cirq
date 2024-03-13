import React, {memo} from 'react';
import { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import { useMemo } from 'react';
import {MainMenu} from '../../data/menu';


const Header = () => {
    const [menu, setMenu] = useState(MainMenu);
    console.log("Header")
    return (
        <section className="">
            <div className=" text-center">
                <div className="row">
                    <div className="col-2 navbar">
                        <a className="navbar-brand" href="#">&nbsp;</a>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Navigation menu={menu} />
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Header;