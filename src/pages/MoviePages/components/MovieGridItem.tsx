import MovieIcon from "../../../MovieIcon";
import React from "react";
import Movie from "../../../models/Movie";

export const MovieGridItem: React.FC<{ movie: Movie }> = (props) => {

    return (
        <div id='1' className='col-md-4 col-sm-6 col-xs-8 col-12 mb-4'>
            <div className='card text-center h-100'>
                {/*<img className='card-img-top p-3'
                     src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                     alt='Card'
                     height='200'/>*/}
                <MovieIcon size={200} />
                <div className='card-body'>
                    <h5 className='card-title'>{props.movie.title}</h5>
                    <p className='card-text'>
                        {props.movie.description}
                    </p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item lead'>Ticket price: $9.95</li>
                </ul>
                <div className='card-body'>
                    <a className='btn btn-dark m-1' href={`/details/${props.movie.id}`}>Details</a>
                    <button className='btn btn-dark m-1'>Book</button>
                </div>
            </div>
        </div>
    );
}
