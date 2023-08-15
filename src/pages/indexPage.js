
import {useEffect, useState} from "react";
import Post from "../post";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blog-m8ji.onrender.com/post').then(response => {
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