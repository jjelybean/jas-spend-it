import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"
import { Link } from 'react-router-dom';


function Navbar () {

        return (
            <div>
                <nav className="navbar navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="/vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Jas Spend It
                    </a>

                    {/* options */}
                     <div className="d-flex ms-auto" id="navbarNavDropdown">
                        
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">
                                About
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link active" aria-current="page">
                                Sign up
                                </Link>
                            </li> 

                        </ul>

                        <button type="button" className="btn btn-outline-success">Sign In</button>
                     </div>

                        
                </div>
                </nav>
            </div> 

        );

}

export default Navbar;

