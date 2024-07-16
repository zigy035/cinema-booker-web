import { useState, useEffect } from 'react';
import Movie from '../models/Movie';
import MovieSection from "../components/MovieSection";
import { MovieService } from '../api/movieService';
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
    const [nowShowing, setNowShowing] = useState<Movie[]>([]);
    const [comingSoon, setComingSoon] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [nowPlaying, upcoming] = await Promise.all([
                    MovieService.getNowShowing(),
                    MovieService.getComingSoon()
                ]);
                setNowShowing(nowPlaying);
                setComingSoon(upcoming);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load movies');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="home-page">
            <MovieSection title="Now Showing" movies={nowShowing} />
            <MovieSection title="Coming Soon" movies={comingSoon} />
        </div>
    );
}