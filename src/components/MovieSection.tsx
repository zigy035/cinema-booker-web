import React from 'react';
import MovieCard from './MovieCard';
import Movie from '@/models/Movie';

interface MovieSectionProps {
    title: string;
    movies: Movie[];
    type?: 'now-showing' | 'coming-soon';
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies, type = 'now-showing' }) => {
    return (
        <section className={`py-5 ${type === 'coming-soon' ? 'bg-light' : ''}`}>
            <div className="container">
                <h2 className="mb-4 fw-bold">{title}</h2>
                <div className="row">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} type={type} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieSection;