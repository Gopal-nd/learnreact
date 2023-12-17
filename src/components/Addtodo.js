import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../features/todoSlice'

const Addtodo = () => {
    const dispatch = useDispatch()
    const [input, setinput] = useState('')
    const onSubmit =(e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setinput('')
    }
  return (
    <div className='app'>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder='Enter text..'
        value={input} onChange={(e)=>setinput(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtodo
