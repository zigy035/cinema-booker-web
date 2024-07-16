interface Movie {
    id: number;
    title: string;
    description?: string;
    genre: string;
    poster: string;
    rating?: number;
    duration?: string;
    showtimes?: string[];
    releaseDate?: string;
    trailerLink?: string;
}

export default Movie;