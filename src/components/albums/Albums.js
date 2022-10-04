import {useEffect, useState} from "react";
import {getAlbums} from "../service";
import {Album} from "../album";

const Albums = () => {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums().then(albums => {
            setAlbums(albums);
        })
    }, [])
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};
export {Albums}