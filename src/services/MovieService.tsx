//import axios from "axios";
import Movie from "../models/Movie";

const BASE_URL = 'http://localhost:8080';
const MOVIE_URL = BASE_URL + '/api/movies';

class MovieService {

    static async getMovies() : Promise<Movie[]> {
        try {
            const response = await fetch(MOVIE_URL);
            if (!response.ok) {
                console.error(response.statusText);
                return Promise.reject(response.statusText);
            }

            const responseJson = await response.json();

            return responseJson.content;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error; // You might want to handle this error more gracefully
        }
    }

    static async getMovie(movieId: number) : Promise<Movie> {
        try {
            const response = await fetch(MOVIE_URL + `/${movieId}`);
            if (!response.ok) {
                console.error(response.statusText);
                return Promise.reject(response.statusText);
            }

            const responseJson = await response.json();

            return {
                id: responseJson.id,
                title: responseJson.title,
                description: responseJson.description,
                genre: responseJson.genre,
                duration: responseJson.duration,
                img: responseJson.img,
            };
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error; // You might want to handle this error more gracefully
        }
    }
}

export default MovieService;


