import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"


function Navbar () {

        return (
            <div>
                <nav className="navbar navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="/vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Jas Spend It
                    </a>

                    <div className="navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Sign up</a>
                            </li>

                            <button className="btn btn-outline-success" type="submit">Sign In</button>

                        </ul>
                    </div>
                        
                </div>
                </nav>
            </div> 

        );

}

export default Navbar;