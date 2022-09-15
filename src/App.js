import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import Characters from "./components/rick_and_morty/characters/Characters";

function App() {
    return (<div>
            <div>
                {/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}
                <h1 className="task">Task1</h1>
                <div>
                        <Simpsons/>
                </div>
            </div>
            <div>
                {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
                {/*https://rickandmortyapi.com/*/}
                {/*https://rickandmortyapi.com/api/character*/}
                {/*Створити 6 персонажів*/}
                <h1 className="task">Task2</h1>
                <Characters/>
            </div>
        </div>
    );
}

export default App;
