import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Movie from './Pages/Movie'
import Error from './Pages/Error';
import Favorites from './Pages/Favorites';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/Movie/:id" element={ <Movie/> }></Route>
                <Route path="/favorites" element={ <Favorites/> }></Route>

                <Route path="*" element={ <Error/> } />
            </Routes>        
        </BrowserRouter>
    )
}

export default RoutesApp;