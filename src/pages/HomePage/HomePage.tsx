import {Carousel} from "./components/Carousel";

export const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content container text-center text-white">
                    <h1 className="display-4 fw-bold mb-3">Book Your Cinema Experience</h1>
                    <p className="lead mb-4">Discover the latest blockbusters and reserve your seats in seconds.</p>
                    <a href="/movies" className="btn btn-danger btn-lg px-5">Browse Movies</a>
                </div>
            </section>

            {/* Now Showing Section */}
            <section className="container my-5">
                <h2 className="mb-4 fw-bold">Now Showing</h2>
                <div className="row g-4">
                    {[
                        { title: "Galactic Storm", genre: "Sci-Fi", img: "https://placehold.co/300x450?text=Galactic+Storm" },
                        { title: "The Last Horizon", genre: "Drama", img: "https://placehold.co/300x450?text=The+Last+Horizon" },
                        { title: "Dark Waters", genre: "Thriller", img: "https://placehold.co/300x450?text=Dark+Waters" },
                        { title: "Laughing Out Loud", genre: "Comedy", img: "https://placehold.co/300x450?text=Laughing+Out+Loud" },
                    ].map((movie) => (
                        <div className="col-sm-6 col-lg-3" key={movie.title}>
                            <div className="movie-card card h-100">
                                <img src={movie.img} className="card-img-top movie-poster" alt={movie.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{movie.title}</h5>
                                    <p className="text-muted small">{movie.genre}</p>
                                    <a href="/movies" className="btn btn-book btn-sm text-white w-100">Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="mb-4 fw-bold">Coming Soon</h2>
                    <div className="row g-4">
                        {[
                            { title: "Iron Veil", genre: "Action", img: "https://placehold.co/300x450?text=Iron+Veil" },
                            { title: "Whispers in the Dark", genre: "Horror", img: "https://placehold.co/300x450?text=Whispers+in+the+Dark" },
                            { title: "Eternal Bond", genre: "Romance", img: "https://placehold.co/300x450?text=Eternal+Bond" },
                        ].map((movie) => (
                            <div className="col-sm-6 col-lg-4" key={movie.title}>
                                <div className="movie-card card h-100">
                                    <img src={movie.img} className="card-img-top movie-poster" alt={movie.title} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold">{movie.title}</h5>
                                        <p className="text-muted small">{movie.genre}</p>
                                        <button className="btn btn-outline-secondary btn-sm w-100" disabled>Coming Soon</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Carousel />
        </div>
    );
}