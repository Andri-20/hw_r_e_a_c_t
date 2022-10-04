import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Todos} from "./components/todos";

function App() {
  return (
    <div>
      <ul>
        <li><Link to={'/todos'}>Todos</Link></li>
      </ul>

      <Routes>
        <Route path={'/todos'} element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
