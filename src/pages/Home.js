import { getDocs,collection, deleteDoc,doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db,auth } from "../firebase-config";


export const Home = ({isAuth})=>{

    const [postList,setPostList] = useState([])
    const postsCollectionRef = collection(db,"posts")


useEffect(()=>{
    const getPosts = async ()=>{
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));
    }
    getPosts();
})

const deletepost = async (id)=>{
    const postdoc = doc(db,"posts",id)
    await deleteDoc(postdoc)
}

    return(
        <div className="homepage">{postList.map((post)=>{
            return (
                <div className="posts">
                    <div className="postheader">
                        <div className="title">
                            <h3>{post.title}</h3>
                        </div>
                        <div className="delete">
                            {isAuth && post.author.id === auth.currentUser.uid &&(<button onClick={()=>{deletepost(post.id)}}> &#128465; </button>)}</div> 
                    </div>
                    <div className="posttextheader">{post.postText}</div>
                    <h6>@{post.author.name}</h6>
                </div>
            )
        })}</div>
    )
}