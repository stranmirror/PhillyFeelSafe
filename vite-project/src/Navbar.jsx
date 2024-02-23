import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <h1>PhillyFeelSafe Website</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/map"> | Map with Crime History | </Link>
                    <Link to="/reference"> Reference Links | </Link>
                    <Link to="/contact">Contact Us! |</Link>
                </div>
            </nav>

            <Outlet />
        </> 
    
    );
}
 
export default Navbar;