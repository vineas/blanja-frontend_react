import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
// import Nav from '../../pages/Nav'
import Home from '../../pages/Home'
// import Detail from '../../pages/Detail'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Mybag from '../../pages/Mybag'
import Order from '../../pages/Order'
import ProfileSeller from '../../pages/ProfileSeller'
import DetailProduct from '../../pages/DetailProduct'
import Auth from '../../components/Auth'

const index = () => {
    return (
        <BrowserRouter>
        {/* <Nav/> */}
            <Routes>
                <Route path='/' element={<Navigate to='/home' replace='true' />} />
                {/* <Route path='/home' element={<Home />} /> */}
                <Route path="/home" element={<Auth><Home/></Auth>} />
                <Route path='/profile' element={<ProfileSeller/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/product/:id' element={<DetailProduct />}/>
                <Route path='/mybag' element={<Mybag />} />
                <Route path='/order/:id' element={<Order/>} />
                {/* <Route path='/*' element={<Page404 />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default index