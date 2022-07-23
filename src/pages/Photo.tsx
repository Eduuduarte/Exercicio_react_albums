import { useEffect, useState } from "react";
import { api } from "../Api/API";
import { Photo } from '../types/postPhoto'
import {useParams} from 'react-router-dom';
import { GetPhoto } from "../components/GetPhoto/GetPhoto";
import { Buttton } from "../components/Button/Button";

export const Photos = () => {
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<Photo>(
            {
                albumId: 0,
                id: 0, 
                title: '',
                url:'', 
                thumbnailUrl: ''
            }
        );

    const params = useParams();

    useEffect(()=> {
        if(params.id) {
            
            loadingPhoto(params.id);
            
        }
    }, [])

    const loadingPhoto = async (id: string) => {
        setLoading(true);
        let jsonPhoto = await api.getPhoto(id);
        setPhoto(jsonPhoto);
        setLoading(false);
    }

    return(
        <div>
            <Buttton />
            <GetPhoto
                data={photo}
            />
        </div>
    );
}