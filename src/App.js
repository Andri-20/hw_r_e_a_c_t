import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Todos} from "./components/todos";
import {Home} from "./components/Home page/Home";
import {Albums} from "./components/albums";
import {Comments} from "./components/comments";
import {Posts} from "./components/posts/Posts";

function App() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={':id'} element={<Posts/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
