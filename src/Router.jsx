import React from 'react';
import Calendly from './component/Calendly';
import Enterprise from './component/Enterprise';
import Individuals from "./component/Individuals";
import Team from './component/Team';
import Navbars from './component/Navbars';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./Individuals.css"

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbars/>
            <Routes>
                <Route path='/' element={<Calendly/>}/>
                <Route path='/individuals' element={<Individuals/>}/>
                <Route path='/enterprise' element={<Enterprise/>}/>
                <Route path='/team' element={<Team/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;