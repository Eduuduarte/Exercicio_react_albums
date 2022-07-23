import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Album } from '../pages/Album';
import { Home } from '../pages/Home';
import { Photos } from '../pages/Photo'


export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/album/:id" element={ <Album />} />
                <Route path="/photos/:id" element={ <Photos /> } />
            </Routes>
        </BrowserRouter>
    );  
}