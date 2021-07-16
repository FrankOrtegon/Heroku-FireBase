import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className="col-md-11 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <Link className="navbar-brand" to={"/"}> <i
                    className="bi bi-film"/> Series App </Link>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link mr-3 " to={"/series"}>
                    <i className="bi bi-play-btn"/> Series </Link>
                    <Link className="nav-item nav-link mr-3 " to={"/add-series"}>
                    <i className="bi bi-plus-square"/> Add Series </Link>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header