import React from 'react'
import { useContext } from 'react'
import { LoginDetails } from '../context/login'

const Login = () => {
    const {first,setfirst,setStatus,status} = useContext(LoginDetails)

  return (
    <div >
        <input
         type="text" 
         value={first}   
        onChange={(e)=>{setfirst(e.target.value)}}
         />
         <input 
         type="password" 
         
         />
         <button onClick={()=>setStatus(!status)}>Login</button>
        
    </div>
  )
}

export default Login