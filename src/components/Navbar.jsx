function Navbar({developer}) {
    return (
        <div>
            <h4>This site developed by: {developer}</h4>
            <a className="navLink" href="/">Home</a>
            <a className="navLink" href="/contact">Contact us</a>
        </div>
    );
}

export default Navbar;