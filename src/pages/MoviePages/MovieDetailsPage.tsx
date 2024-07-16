import React, {useEffect, useState} from "react";
import Movie from "../../models/Movie";
import movieService from "../../services/MovieService";
import broadcastService from "../../services/BroadcastService";
import MovieDetails from "./components/MovieDetails";
import DateSelector from "./components/DateSelector";
import TimeSlots from "./components/TimeSlots";
import DateTimeSlot from "../../models/DateTimeSlot";

//export const MoviesDetailsPage: React.FC<{ movieId: Movie }> = (props) => {
export const MoviesDetailsPage: React.FC = () => {

    const movieId = Number((window.location.pathname).split('/')[2]);

    const [movie, setMovie] = useState<Movie>();
    const [timeSlotMap, setTimeSlotMap] = useState<DateTimeSlot>();
    const [timeSlots, setTimeSlots] = useState<string[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {
        console.log("movieId = " + movieId);
        const getData = async () => {
            setMovie(await movieService.getMovie(movieId));
            setTimeSlotMap(await broadcastService.getTimeSlots(movieId))
        };

        getData().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
        setIsLoading(false);

    }, [movieId]);

    if (isLoading) {
        return (
            /*<SpinnerLoading/>*/
            <div className='container m-5'>
                <p>Loading...</p>
            </div>
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    const handleDateChange = (date: string) => {
        console.log("TimeslotMap = ", timeSlotMap);
        console.log("Date = " + date);
        if (timeSlotMap) {
            setTimeSlots(timeSlotMap[date]);
        } else {
            const emptySlots: string[] = [];
            setTimeSlots(emptySlots)
        }
        console.log("Timeslots = ", timeSlots);
    };
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6">
                    {movie !== undefined &&
                        <MovieDetails title={movie.title} description={movie.description} image={movie.img}/>}
                </div>
                <div className="col-lg-6">
                    <div className="text-right">
                        <DateSelector onDateChange={handleDateChange}/>
                    </div>
                    { timeSlots !== undefined && <TimeSlots timeSlots={timeSlots}/> }
                </div>
            </div>
        </div>
    );
}