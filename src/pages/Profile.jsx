import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ModalCreate from '../components/ModalCreate'
import ModalUpdate from '../components/ModalUpdate'
import ModalDelete from '../components/ModalDelete'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import ProfileCustomer from './ProfileCustomer'
import ProfileSeller from './ProfileSeller'
const profileImage = require('../img/profile.png')

const Profile = () => {
  const customerId = localStorage.getItem('customer_id');

  const profileComponent = customerId ? <ProfileCustomer /> : <ProfileSeller />;

  return (
    <div>
      {profileComponent}
    </div>
  );
}

export default Profile