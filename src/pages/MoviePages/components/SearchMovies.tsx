import {MovieGridItem} from "./MovieGridItem";

export const SearchMovies = () => {

    return (
        <div className='row justify-content-center'>
            <div className='buttons text-center py-5'>
                <button className='btn btn-outline-dark btn-sm m-2'>All</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Men's Clothing</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Women's Clothing</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Jewelery</button>
                <button className='btn btn-outline-dark btn-sm m-2'>Electronics</button>
            </div>

            {Array.from({ length: 9 }, (_, i) =>
                <MovieGridItem/>
            )}



        </div>
    );
}
