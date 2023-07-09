import React from 'react'
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import Nav from '../../pages/Nav'
import Profile from '../../pages/Profile'
import Home from '../../pages/Home'



const index = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Navigate to='/home' replace='true' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                {/* <Route path='/product/:id' element={<Product />} /> */}
                {/* <Route path='/*' element={<Page404 />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default index