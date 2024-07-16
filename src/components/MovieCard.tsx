import React from 'react';
import { FaStar } from 'react-icons/fa';
import Movie from '@/models/Movie';

interface MovieCardProps {
    movie: Movie;
    type?: 'now-showing' | 'coming-soon';
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, type = 'now-showing' }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card movie-card h-100">
                <img
                    src={movie.poster}
                    className="card-img-top movie-poster"
                    alt={movie.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    {type === 'now-showing' ? (
                        <>
                            <p className="card-text text-muted">
                                {movie.genre} • {movie.duration}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                <span className="badge bg-warning text-dark">
                  <FaStar className="me-1" /> {movie.rating}
                </span>
                                <a href="#" className="btn btn-sm btn-book">
                                    Book Now
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="card-text text-muted">{movie.genre}</p>
                            <p className="text-primary">Coming {movie.releaseDate}</p>
                            <button className="btn btn-outline-primary btn-sm w-100">
                                Notify Me
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;