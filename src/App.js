
import './App.css';
import Login from './components/Login';
import { LoginDetails } from './context/login';
import { useState } from 'react';
import Profile from './components/profile';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {
  const [first, setfirst] = useState("")
const [status,setStatus] = useState(false)
  return (
    <LoginDetails.Provider value={{first,setfirst,setStatus,status}}>
    <div className="App">
    {status ?<Profile/>:<Login/>}
    <Addtodo/>
    <Todos/>
    </div>
    </LoginDetails.Provider>

  );
}

export default App;
