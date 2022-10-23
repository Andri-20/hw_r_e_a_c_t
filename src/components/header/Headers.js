import {Link} from "react-router-dom";

import css from './HEADER.module.css'
import Switcher from "../dark_light_mode/Switcher";
const Headers = () => {

    return (
        <div className={css.nav_header}>
            <div><Link to={'/'}>Main</Link></div>
            <div><Link to={'discover/movie'}>All movies</Link></div>
            <div><Link to={'genre/movie/list'}>All genres</Link></div>
            <input type="text" placeholder={"введіть ваш фільм"}/>
            <Switcher/>
        </div>
    )
}
export {Headers};