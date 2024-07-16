import React from 'react';

//const TimeSlots: React.FC<{ timeSlots: string[] }> = (props) => (
const MovieDetails: React.FC<{ title: string, description: string, image: string }> = (props) => (
    <div className="movie-details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.image} alt="Movie" className="img-fluid mb-3" />
    </div>
);

export default MovieDetails;
