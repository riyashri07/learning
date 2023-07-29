import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Carrers from '../Pages/Carrers';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Logout from '../Pages/Logout';

const Allroutes = () => {
    return (
        <div  className='pages'>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/carrers" element={<Carrers />}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>
        </div>
    );
}

export default Allroutes