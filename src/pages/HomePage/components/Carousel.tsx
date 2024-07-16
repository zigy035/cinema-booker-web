export const Carousel = () => {
    const slides = [
        {
            img: "https://placehold.co/1200x400?text=Summer+Blockbusters+Are+Here",
            caption: "Summer Blockbusters Are Here",
            sub: "Book your seats before they sell out!",
        },
        {
            img: "https://placehold.co/1200x400?text=Family+Movie+Weekend",
            caption: "Family Movie Weekend",
            sub: "Great films for all ages — every Saturday & Sunday.",
        },
        {
            img: "https://placehold.co/1200x400?text=VIP+Experience+Available",
            caption: "VIP Experience Available",
            sub: "Upgrade to premium seating for the ultimate night out.",
        },
    ];

    return (
        <section className="container my-5">
            <div id="cinemaCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            data-bs-target="#cinemaCarousel"
                            data-bs-slide-to={i}
                            className={i === 0 ? "active" : ""}
                            aria-current={i === 0 ? "true" : undefined}
                        />
                    ))}
                </div>

                <div className="carousel-inner rounded">
                    {slides.map((slide, i) => (
                        <div className={`carousel-item${i === 0 ? " active" : ""}`} key={i}>
                            <img src={slide.img} className="d-block w-100" alt={slide.caption} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.caption}</h5>
                                <p>{slide.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#cinemaCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#cinemaCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}