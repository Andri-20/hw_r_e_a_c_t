import './character.css'
export default function component(props) {
    let {item} = props;
    return (<div className="wrap_character">
            <img className="photo_character" src = {item.image} alt='img'/>
            <div className="info_character">
                <h1 className="title">Id:{item.id} - {item.name}</h1>
                <span className="status"><span className="icon_status"></span>{item.status}</span>
                <h3> {item.species}</h3>
                <h3>{item.gender}</h3>
            </div>

        </div>
    );
}