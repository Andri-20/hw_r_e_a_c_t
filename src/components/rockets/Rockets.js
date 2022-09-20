import {useEffect, useState} from "react";
import {getRocketsAxios} from "../../service/axios.api";
import {Rocket} from "../rocket/Rocket";

export default function Rockets(){
  const [rockets,setRockets] = useState([])
    useEffect(()=>{
getRocketsAxios.then(
    value => setRockets(value.data.filter(value=>value.launch_year !== '2020'))
    )
    },[])
    return(
        <div>
            {rockets.map((rocket,index) =><Rocket rocket={rocket} key={index}/>)}
        </div>
    )



}