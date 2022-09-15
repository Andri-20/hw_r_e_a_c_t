import {useState} from "react";
import Character from "../characters/character/Character"
import './characters.css'
export default function Characters() {
   let [characters,setCharacters] = useState([])
fetch(`https://rickandmortyapi.com/api/character`)
 .then(value => value.json())
  .then(value => {
    setCharacters(value.results.splice(0,6));
  })

return (<div className="wrap_characters">
      {characters.map((character)=>(
<Character item={character} key={Character.id}/>
        ))}
</div>
);
}