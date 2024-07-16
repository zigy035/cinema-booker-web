import { MovieGridItem } from "./MovieGridItem";
import React, {useState} from "react";
import Movie from "../../../models/Movie";

export const SearchMovies = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <div className='row justify-content-center'>
            <div className='buttons text-center py-5'>
                <button className='btn btn-outline-dark btn-sm m-2'>All</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Men's Clothing</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Women's Clothing</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Jewelery</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Electronics</button>
            </div>

            {/*{Array.from({ length: 9 }, (_, i) =>
                <MovieGridItem/>
            )}*/}

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
                    movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.description}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.duration} min</td>
                                {/*<td>{movie.img}</td>*/}
                                {/*<td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                            style={{marginLeft: "10px"}}> Delete
                                    </button>
                                </td>*/}
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>

        </div>
    );
}
