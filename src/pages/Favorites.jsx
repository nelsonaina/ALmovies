import MovieCard from "../Components/MovieCard";
import { useMovieContext } from "../context/MovieContext";
import "../css/Favorites.css";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites Movies Here</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="favorites-empty">
                <h2>No Favorites Movies Yet</h2>
                <p>
                    Start adding movies to favorites and they will appear here
                </p>
            </div>
        );
    }
}

export default Favorites;
