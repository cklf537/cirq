import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = memo((...props) => {
    console.log("Component Navigation!");
    const [menu] = props;
    const mainMenu = menu.menu;
    return (
            <nav className="navbar bg-body-tertiary  fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">iPrepQ</NavLink>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {
                        mainMenu && mainMenu.map((menuItem, i) => (
                            <li className="nav-item" key={i} >
                                <a className="nav-link active" aria-current="page" href={menuItem.url}>{menuItem.Display}</a>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                </div>
            </div>
            </nav>
    )
});

export default Navigation;