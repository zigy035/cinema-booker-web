import Movie from "./Movie";

export interface MovieApiResponse {
    success: boolean;
    data: Movie[];
    message?: string;
}