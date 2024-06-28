class Movie {
    id: number;
    title: string;
    description?: string;
    genre?: string;
    duration: number;
    img?: string;

    constructor(id: number, title: string, description: string, genre: string, duration: number, img: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.duration = duration;
        this.img = img;
    }
}

export default Movie;