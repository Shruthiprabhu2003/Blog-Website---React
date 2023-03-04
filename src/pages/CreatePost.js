import { useEffect, useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db,auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({isAuth})=>{
    
    const [title,setTitle] = useState("");
    const [postText,setPostText] = useState("");

    let navigate = useNavigate();

    const postsCollectionRef = collection(db,"posts")

    const createPost = async()=>{
        await addDoc(postsCollectionRef,{title,postText,author:{name:auth.currentUser.displayName, id:auth.currentUser.uid }})
        navigate("/");
    }

    useEffect(()=>{   //redirecting to login page if not logged in
        if(!isAuth){
            navigate("/login")
        }
    })

    return(
        <div className="createpostpage">
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputgp">
                    <label> Title:</label>
                    <input placeholder="Title..." onChange={(e)=>{
                        setTitle(e.target.value)
                    }}></input>
                </div>
                <div className="inputgp">
                    <label> Post:</label>
                    <textarea placeholder="Post..." onChange={(e)=>{
                        setPostText(e.target.value)
                    }}/>
                </div>
                <button className="submitbutton" onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}