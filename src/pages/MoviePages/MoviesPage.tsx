import React, {useEffect, useState} from "react";
import MovieService from "../../services/MovieService";
import Movie from "../../models/Movie";
import {MovieGridItem} from "./components/MovieGridItem";

export const MoviesPage: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const getData = async () => {
            setMovies(await MovieService.getMovies());
        };

        getData().then(res => console.log(res));
    }, []);

    return (
        <div className='container'>
            {/*<SearchMovies />*/}
            <div className='row justify-content-center'>
                <div className='buttons text-center py-5'>
                    <button className='btn btn-outline-dark btn-sm m-2'>All</button>
                    <button className='btn btn-outline-dark btn-sm m-2'>Men's Clothing</button>
                    <button className='btn btn-outline-dark btn-sm m-2'>Women's Clothing</button>
                    <button className='btn btn-outline-dark btn-sm m-2'>Jewelery</button>
                    <button className='btn btn-outline-dark btn-sm m-2'>Electronics</button>
                </div>

                {movies.map(movie => <MovieGridItem key={movie.id} movie={movie} /> )}

            </div>
        </div>
    );
}