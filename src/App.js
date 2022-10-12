import './App.css';
import {Route, Routes} from "react-router-dom";
import {CommentsPage, PostsPage, SingleUserPage, UsersPage} from "./pages";
import {MainLayout} from "./layot";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'users/:id'} element={<SingleUserPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
