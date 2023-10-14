import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './pages/UserContext';

const Header = () => {

  const {setUserInfo,userInfo} = useContext(UserContext);
  // console.log("userINfo",setUserInfo);
  console.log("userContxo",UserContext);
  const local="http://localhost:4000/profile";
  const render='https://blog-m8ji.onrender.com/profile';

  useEffect(() => {
    fetch(local).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log("Userinf",userInfo); 
        
        // state not updating
      });
    });
  }, []);
  
  function logout(){  

    fetch(local+"/logout",{ 
      // credentials:'include',
      method: 'POST',
    })
    localStorage.clear();

    setUserInfo(null);
  }

  const myObj = JSON.parse(localStorage.getItem("Profile"));
  console.log("profilename",myObj);

  const username=userInfo?.username || myObj?.userInfo?.username;
   console.log("USername1",username);
  return (
    <header>
            <a href="/" className="logo">My Blog</a>
            <nav>
            {
              username && (
                <>
                <Link to="/create">Create Post</Link>
                <button onClick={logout}>Logout</button>
                
              </>
              )
            }
            {
              !username && (
                <>
                <Link to="/login"> Login </Link>
                <Link to="/register">Register</Link>
              </>
              )
            }
              
            </nav>
    </header>
  )
}

export default Header;