import {useLocation} from "react-router-dom";
import MovieInfo from "../movieInfo/MovieInfo";

const CurrentMovie = () => {
    let location = useLocation();
    let {state: movie} = location;

    return (
        <div>
            {movie && <MovieInfo key={movie.id} movie={movie}/>}
        </div>
    );
};

export default CurrentMovie;