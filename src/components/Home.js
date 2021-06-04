import { useEffect, useState } from "react";
import Hero from "./Hero";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {

  let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/aayushd18.github.io/movie-browser/movies/${movie.id}`
  if (movie.poster_path === null) {
    posterUrl = process.env.PUBLIC_URL + '/commingsoon.webp'
  }
  
  return (
    <div className="col-lg-3 col-md-3 col-4 my-4 cards  shadow-lg">
      <div className="card" >
        <img src={posterUrl} className="card-img-top card-img" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Movie Details</Link>
        </div>
      </div>
    </div>
  )
}
const DiscoverCard = ({ movie }) => {

  let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/aayushd18.github.io/movie-browser/movies/${movie.id}`
  if (movie.poster_path === null) {
    posterUrl = process.env.PUBLIC_URL + '/commingsoon.webp'
  }
  
  return (
    <div className="col-lg-3 col-md-3 col-4 my-4 cards shadow-lg">
      <div className="card" >
        <img src={posterUrl} className="card-img-top card-img" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Movie Details</Link>
        </div>
      </div>
    </div>
  )
}

const GenreCard = ({ genres }) => {

  
  return (
    <div className="col-lg-3 col-md-3 col-4 my-4 cards shadow-lg genre">
      <div className="card genre">
        <div className="card-body d-flex justify-content-center genre">
          <h5 className="card-title">{genres.name}</h5>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const posterPath = process.env.PUBLIC_URL + '/inline_image.webp'
  const [ trendResults, setTrendResults ] = useState([])
  const [ genreResults, setGenreResults] = useState([])
  const [ discoverResults, setDiscoverResults ] = useState([])
  
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9810fdab8a6872c19c905c5c33b3e351`)
      .then(response => response.json())
      .then(data => {
        setTrendResults(data.results)
      })
  }, [trendResults])

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(data => {
        setDiscoverResults(data.results)
      })
  }, [discoverResults])




  useEffect(() =>{

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setGenreResults(data.genres)
      })
  }, [genreResults])

  
  
  const resultsHtml = trendResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i}/>
  })

  const resultsDiscover = discoverResults.map((obj, i) => {
    return <DiscoverCard movie={obj} key={i}/>
  })

  const resultsGenre = genreResults.map((obj, i) => {
    return <GenreCard genres={obj} key={i}/>
  })
  return (
    <>
      <Hero text="Movie Browser: A Place for Movie Lovers" backdrop={posterPath} />
      <div className="trending-container">
        <h1 className="trend-head">Trending</h1>
        {resultsHtml &&
          <div className="container">
            <div className="row">
              <div className="trend-sec">
                {resultsHtml}
              </div>
            </div>
          </div>
        }
      </div>
      <div className="trending-container">
        <h1 className="trend-head">Discover</h1>
        {resultsDiscover &&
          <div className="container">
            <div className="row">
              <div className="trend-sec">
                {resultsDiscover}
              </div>
            </div>
          </div>
        }
      </div>
      <div className="trending-container">
        <h1 className="trend-head">Genres</h1>
        {resultsGenre &&
          <div className="container">
            <div className="row">
              <div className="trend-sec">
                {resultsGenre}
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Home;
