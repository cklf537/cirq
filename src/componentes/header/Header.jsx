import { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";


const Header = () => {

    const [menu, setMenu] = useState();

    const mainMenu = [
        {
            'title': 'work',
            'Display': 'Work',
            "url":"#",
            'nav-id': 1
        },
        {
            'title': 'services',
            'Display': 'Services',
            "url":"#",
            'nav-id': 2
        },
        {
            'title': 'contact',
            'Display': 'Contact',
            "url":"#",
            'nav-id': 3
        },
        {
            'title': 'blog',
            'Display': 'Blog',
            "url":"#",
            'nav-id': 4
        },
    ]

    useEffect(() => {
        setMenu(mainMenu);
    },[]);

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