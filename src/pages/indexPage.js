
import {useEffect, useState} from "react";
import Post from "../post";

export default function IndexPage() {

  const [posts,setPosts] = useState([]);

  const local="http://localhost:4000/post";
  const render='https://blog-m8ji.onrender.com/post';

  useEffect(() => {
    fetch(local).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
   
        { posts.length && posts.map((post)=>(
            <Post {...post} />
        ))}


    </>
  );
}