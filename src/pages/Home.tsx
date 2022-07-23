import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { api } from '../Api/API';
import { PostsAlbums } from '../types/postAlbuns';
import { GetItems } from '../components/GetItems/GetItems';


export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [albums, setAlbums] = useState<PostsAlbums[]>([]);

    const loadAlbum = async () => {
        setLoading(true);
      let jsonAlbum = await api.getAllPosts();
      setAlbums(jsonAlbum);
      setLoading(false);
    }
  
  
    useEffect(() => {
      loadAlbum();
    }, []);
  
    return (
      <div>  

        <div >
            {loading && "Carregando..."}
        
            {albums.map((item, index) => (
                <Link className='link-dom' to={`album/${item.id}`}>
                    <GetItems key={index} data={item}/>
                </Link>
                
            ))}
        </div>
      </div>
    );
}