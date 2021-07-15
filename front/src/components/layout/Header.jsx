import {Link} from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand mr-3 btn btn-outline-secondary" to={"/"}>Series App <i
                    className="bi bi-controller"/></Link>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary px-5" to={"/series"}>
                        Series <i className="bi bi-film"/></Link>
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary px-5" to={"/add-series"}>
                        Add Series <i className="bi bi-play-btn"/></Link>
                </div>
            </div>
        </nav>
    )
}

export default Header