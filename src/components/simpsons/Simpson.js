import './simpsons.css'
export default function simpson(props) {
    let {item} = props;
    return (<div className="wrap_simpson">
            <img className="photo" src={item.photo} alt="img"/>
            <div className="info">
                <h2 className="title">{item.name} {item.surname} {item.age}</h2>
                <p className="intro">{item.info}</p>
            </div>
        </div>
    );
}