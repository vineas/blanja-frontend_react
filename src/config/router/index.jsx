import React from 'react'
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import Nav from '../../pages/Nav'
import Profile from '../../pages/Profile'
import Home from '../../pages/Home'
import Detail from '../../pages/Detail'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Mybag from '../../pages/Mybag'
import Order from '../../pages/Order'

const index = () => {
    return (
        <BrowserRouter>
        {/* <Nav/> */}
            <Routes>
                <Route path='/' element={<Navigate to='/home' replace='true' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/product/:id' element={<Detail />} />
                <Route path='/mybag' element={<Mybag />} />
                <Route path='/order' element={<Order />} />
                {/* <Route path='/*' element={<Page404 />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default index