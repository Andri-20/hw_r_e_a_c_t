import {simpsons_data} from "./simpsons_data";
import Simpson from "./Simpson";
export default function Simpsons() {
return (<div className="wrap_simpsons">
        {simpsons_data.map((simpson,index)=>(<Simpson item={simpson} key={index}/>))}
</div>
);
}