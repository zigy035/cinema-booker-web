interface Movie {
    id: number;
    title: string;
    genre: string;
    poster: string;
    rating?: number;
    duration?: string;
    showtimes?: string[];
    releaseDate?: string;
    trailerLink?: string;
}

interface MovieApiResponse {
    success: boolean;
    data: Movie[];
    message?: string;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

export const MovieService = {
    async getNowShowing(): Promise<Movie[]> {
        const response = await fetch(`${API_BASE_URL}/movies/now-showing`);

        if (!response.ok) throw new Error('Failed to fetch now showing movies');

        const data: unknown = await response.json();

        // Add runtime validation
        if (!Array.isArray(data)) {
            throw new Error('Expected array of movies');
        }

        return data as Movie[]; // Explicit cast
    },

    async getComingSoon(): Promise<Movie[]> {
        const response = await fetch(`${API_BASE_URL}/movies/coming-soon`);
        if (!response.ok) throw new Error('Failed to fetch coming soon movies');
        return await response.json();
    },

    async getMovieDetails(id: string): Promise<Movie> {
        const response = await fetch(`${API_BASE_URL}/movies/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch movie ${id}`);
        return await response.json();
    }
};

// Mock data for development
export const mockMovieData = {
    nowShowing: [
        {
            id: 1,
            title: "Dune: Part Two",
            genre: "Sci-Fi",
            duration: "2h 46m",
            poster: "https://source.unsplash.com/random/300x450/?dune,movie",
            rating: 4.8,
            showtimes: ["10:00 AM", "2:30 PM", "7:00 PM"],
        },
    ] as Movie[],
    comingSoon: [
        {
            id: 3,
            title: "Avatar 3",
            genre: "Adventure",
            releaseDate: "Dec 2024",
            poster: "https://source.unsplash.com/random/300x450/?avatar,movie",
            trailerLink: "https://youtube.com/embed/example",
        },
    ] as Movie[],
};