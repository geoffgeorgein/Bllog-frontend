import React from 'react'
import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

const Post = ({_id,title,summary,cover,createdAt,author}) => {
  return (
    <div className="post">
        
        <div className="Image">

        <Link to={`/post/${_id}`} >

        <img src={'https://blog-m8ji.onrender.com/'+cover} alt=""/>
        </Link>

        

        </div>
        
        <div className="texts"> 

          <h2> {title}</h2>
          <p className='info'> 
            <a className='author'>{author?.username}</a>
            <time>{formatISO9075(new Date(createdAt))} </time>
          </p>
        </div>
        

      </div>
  )
}

export default Post