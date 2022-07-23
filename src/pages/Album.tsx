import { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from '../Api/API'
import { GetPhotos } from "../components/GetPhotos/GetPhotos";
import { PostsPhotos, PostAlbum } from '../types/postPhotos';
import { Buttton } from "../components/Button/Button";

export const Album = () => {
    const params = useParams();
    const [loading, setLoading] = useState(false);

    const [photos, setPhotos] = useState<PostsPhotos[]>([]);
    const [album, setAlbum] = useState<PostAlbum>({userId: 0, id: 0, title: ''});

    useEffect(()=> {
        if(params.id){
            loadingPhotos(params.id);
            loadingAlbum(params.id);
        }
    }, [])

    const loadingPhotos = async(id: string) => {
        setLoading(true);
        let jsonPhotos = await api.getPhotos(id);
        setPhotos(jsonPhotos);
        setLoading(false);
    }

    const loadingAlbum = async (id: string) => {
        let jsonAlbum = await api.getAlbum(id);
        setAlbum(jsonAlbum);
    }


    return(
        <div>
            {loading && "Carregando..."}

            <h4 className="title-albums">
                {album.title}
            </h4>

            <Buttton />

            <div className="photos">
                {photos.map((item, index)=>(
                    <Link to={`/photos/${item.id}`}>
                    <GetPhotos key={index} data={item}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}