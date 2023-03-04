import {auth,provider} from "../firebase-config"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom" 

export const Login = ({setIsAuth})=>{

    let navigate = useNavigate();

    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true)  //to stay logged in even after closing and reopening the website
            setIsAuth(true);  //to make sure user is logged in
            navigate("/");  //to navigate to home page after log in
        }) 
    }
    return(
        <div className="loginpage">
            <div className="container">
            <p>Sign In With Google to Continue</p>
            <button onClick={signInWithGoogle} className="login-with-google-btn">Sign In with Google</button>
            </div>
        </div>
    )
}