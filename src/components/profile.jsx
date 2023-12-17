import React from 'react'
import { LoginDetails } from '../context/login'
import { useContext } from 'react'

const Profile = () => {
    const {first,setStatus,status} = useContext(LoginDetails)
  return (
    <div>
        <h1>Profile</h1>
        <h2>{first}</h2>
        <button onClick={()=>setStatus(!status)}>Logout</button>
    </div>
  )
}

export default Profile