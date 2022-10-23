import css from './movies.module.css'
import {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {Movie} from "../movie";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import {useSelector} from "react-redux";
import PaginationControlled from "../paginations/Pagination";

const Movies = () => {
//test
    let [movies, setMovies] = useState([]);
    let {page} = useSelector(store => store.movie);

    useEffect(() => {
        moviesService.getAll(page).then(({data}) =>
            setMovies(data.results))
    }, [page])
    //test

    return (<div>

            <PaginationControlled/>

            <div className={css.movies_wrap}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>

            {/*<div className={css.pagination_controled}>*/}
            {/*    <Stack spacing={2}>*/}
            {/*        <Typography>Page: {page}</Typography>*/}
            {/*        <Pagination className={css.pagination} count={500} color="primary" size="large" page={page}*/}
            {/*                    onChange={handleChange}/>*/}
            {/*    </Stack>*/}
            {/*</div>*/}
        </div>
    );
};

export {Movies};