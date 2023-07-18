import React from 'react'

const HandleLogout = () => {
  return (
    <>
        localStorage.removeItem('token')
    </>
  )
}

export default HandleLogout