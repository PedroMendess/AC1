import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PAGINA_INICIAL } from '../login/pagina_inicial';

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='*' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<PAGINA_INICIAL />} />
        </Routes>
        </BrowserRouter>
    );
}