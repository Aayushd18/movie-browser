import { Link, useHistory } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  
  const history = useHistory()
  const updateSearchText = (e) => {
    history.push('https://aayushd18.github.io/movie-browser/search')
    setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="https://aayushd18.github.io/movie-browser/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="https://aayushd18.github.io/movie-browser/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://aayushd18.github.io/movie-browser/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Comming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 search-bar bg-dark"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
              <Link to="https://aayushd18.github.io/movie-browser/search" className="btn btn-outline-info" >
              Search
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
