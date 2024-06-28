import Movie from "../models/Movie";
import axios from "axios";

const BASE_URL = 'http://localhost:8080';
const MOVIE_URL = BASE_URL + '/api/movies';

class MovieService {

    public getAllMovies(): Movie[] {

        // axios.get(MOVIE_URL).then(response => response.data)

        let movie1 = new Movie(1, "Martin", "Dixon", "Dixon", 150, "Dixon");
        let movie2 = new Movie(2, "ASDFF", "XEXEXE", "XEXEXE", 120, "XEXEXE");
        return [movie1, movie2];
    }

    /*handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error) {
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})
    }*/

    /*export const handleResponseWithLoginCheck = (promise) => {
        return promise.then(data => {
            return data;
        }).catch((error) => {
            const status = error?.response?.status;

            //forbidden or unauthorized
            if (status === 403 || status === 401) {
                Store.dispatch('clearUser').then(() => {
                    Router.push({name: 'login'}).catch((e) => console.log(e));
                });
            }
            return Promise.reject(error);
        });
    };*/
}

export default MovieService;