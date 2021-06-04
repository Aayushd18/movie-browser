import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="error-page">
            <h1 className="text-center">Error 404 Not Found</h1>
            <p className="text-center">This isnt a registered page</p>
            <Link to="/aayushd18.github.io/movie-browser/" >
                <button className="btn btn-danger mx-5">Home Page</button>
            </Link>
        </div>
    )
}
export default NotFound;