import { Link } from "react-router-dom";

const Navbar = () => {
    const title = 'The Dojo Blog';

    return ( 
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <Link to="/Home">Home</Link>
                <Link to="/Create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;