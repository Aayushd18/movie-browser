import Hero from "./Hero";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {

  let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/aayushd18.github.io/movie-browser/movies/${movie.id}`

  if (movie.poster_path === null) {
    posterUrl = process.env.PUBLIC_URL + '/commingsoon.webp'
  }
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4 shadow-lg">
      <div className="card" >
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Movie Details</Link>
        </div>
      </div>
    </div>
  )
}

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  if (searchResults === null) {
    return <h1>No Results Found</h1>
  } else {
    
    const resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i}/>
    })
    return (
      <>
        <Hero text={title} />
        <div className="trending-container">
          {resultsHtml &&
            <div className="container">
              <div className="row">
                {resultsHtml}
              </div>
            </div>
          }  
        </div>
      </>
    );
  }

  
};

export default SearchView;
