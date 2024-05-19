import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './NavBarData';
import './Navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const updateSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="bars">
                <Link to="#" className="menu-bars menu">
                    {!sidebar && <FaIcons.FaBars onClick={updateSidebar} />}
                </Link>
            </div>
            <hr className="line"></hr>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={updateSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
