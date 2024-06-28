import { useEffect, useState } from "react";
import Movie from "../../models/Movie";
import MovieService from "../../services/MovieService";
import {SearchMovies} from "./components/SearchMovies";

const movieService = new MovieService();

export const MoviesPage = () => {

    //constructor(private movieService: MovieService) {}

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        setMovies(movieService.getAllMovies());
    }, [])

    return (
        <div className='container'>
            <SearchMovies />
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Movie Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Genre</th>
                        <th>Duration</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                {
                    movies.map(
                        movie =>
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.description}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.duration} min</td>
                                <td>{movie.img}</td>
                                {/*<td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                            style={{marginLeft: "10px"}}> Delete
                                    </button>
                                </td>*/}
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}