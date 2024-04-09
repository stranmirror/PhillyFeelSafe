import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './NavBarData';
import './Navbar.css';

const Navbar = () => {
//wl484: Sets the initial state of the sidebar (false = no showing true = showing)
    const [sidebar, setSidebar] = useState(false);
//wl484: a function that set the state to its opposite
    const updateSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="bars">
                 <Link to="#" className="menu-bars menu">
{/* wl484: applying on click event on the bar icon "the three lines" using the function */}
                    <FaIcons.FaBars onClick={updateSidebar}/> 
                </Link>
            </div>
            <hr className="line"></hr>
{/* wl484: uses conditional operator "?" to set sidebar as showing or hidden */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
{/* wl484: another icon that shows as a closing icon "X" to close the navbar */}
                <ul className='nav-menu-items'onClick={updateSidebar}>
{/* wl484: placing the closing icon "X" into the side navbar */}
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" >
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
{/* wl484: structure the different link paths as item showing with title and icon*/}
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.Name}>
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

