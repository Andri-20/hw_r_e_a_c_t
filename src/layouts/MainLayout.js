import {Headers} from "../components";
import css from './main_layout.module.css'

import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Headers/>
            <div className={css.wrapper}>
                <Outlet/>
            </div>
        </div>

    )
}
export {MainLayout};