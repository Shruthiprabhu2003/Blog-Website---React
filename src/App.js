import './App.css'; 
import { BrowserRouter as Router,Routes,Route,Link, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CreatePost } from './pages/CreatePost';
import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "./firebase-config"

function App() {

  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);  //not logged in anymore
      window.location.pathname = "/login";  //we cannot use navigate hook outside router so we use windows.loacation.pathname="/path"
    })
  }

  return (
    <Router>
      <nav>
      <Link to="/"> Home </Link>
      
      {!isAuth ? <Link to="/login"> Login </Link> : (
        <>        
        <Link to="/createpost"> Create Post </Link>
      <button className='logout' onClick={signUserOut}> Log Out </button>
      </>)}
      </nav>
      <Routes>
      <Route path='/' element={<Home isAuth={isAuth}/>} />
      <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>

    </Router>
  );
}

export default App;
