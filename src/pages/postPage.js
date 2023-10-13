import { formatISO9075 } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {UserContext} from "./UserContext";

const PostPage = () => {

    const {id}=useParams();
    const [postInfo,setPostInfo]=useState();
    const {userInfo} = useContext(UserContext);
    console.log("postinfo",postInfo);

    const local="http://localhost:4000";
    const render='https://blog-m8ji.onrender.com';
    useEffect(() => {

        fetch(local+`/post/${id}`)
        .then(response => {
            response.json().then(postInfo=>{
                setPostInfo(postInfo);
            })
        })
        // console.log(params)
    },[])

  return (
    <div className="post-page">

        <div className='image'>

            <img src={`https://blog-m8ji.onrender.com/${postInfo?.cover}`} ></img>

        </div>

        <h1>{postInfo?.title} </h1>
        {/* <time>{formatISO9075(new Date(postInfo?.createdAt))}</time> */}
        <div className="author">by @{postInfo?.author.username}</div>
        {
            userInfo.id===postInfo?.author._id && (
                <div className='edit-row'> 
                    <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
                        Edit this post
                    </Link>
                </div>
            )
        }

        <div className='content' dangerouslySetInnerHTML={{__html:postInfo?.content}} ></div>
        
    </div>
  )
}

export default PostPage