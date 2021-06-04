import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetail() {

        
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            let posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

            if (movieDetails.poster_path === null) {
                posterPath = process.env.PUBLIC_URL + '/commingsoon.webp'
            }
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="trending-container about-sec movie-back">
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-3 col-4">
                                    <img  src={posterPath} alt="..." className="img-fluid shadow rounded" />
                                </div>
                                <div className="col-md-9 col-8 text-white">
                                    <h2>{movieDetails.original_title}</h2>
                                    <p className="lead text-white">
                                        {movieDetails.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
                
        }
    }
  return renderMovieDetail()
};

export default MovieView;
