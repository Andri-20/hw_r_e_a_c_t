import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {useEffect, useState} from "react";
import {getGenres} from "./services";
import CurrentMovie from "./components/current.movie/CurrentMovie";
import PaginationControlled from "./components/paginations/Pagination";
import {useDispatch} from "react-redux";
import {addGenres} from "./redux";

const App = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        getGenres.getAll().then(({data}) => {
            for (const genre of data.genres) {
                dispatch(addGenres(genre));
            }
        })
    }, [])

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'discover/movie'} element={<MoviesPage/>}/>
                    <Route path={'movie/:id'} element={<CurrentMovie/>}/>
                </Route>
            </Routes>

                {/*<PaginationControlled/>*/}
        </div>

    )
};

export default App;