const Navbar = () => {
    return (  
       <nav className = "navbar">
            <h1>PhillyFeelSafe Website</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/map"> | Map with Crime History | </a>
                <a href="/reference"> Reference Links | </a>
                <a href="/contact"> Contact Us |</a>
            </div>
       </nav>
    );
}
 
export default Navbar;