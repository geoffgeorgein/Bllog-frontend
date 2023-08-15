import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './pages/UserContext';

const Header = () => {

  const {setUserInfo,userInfo} = useContext(UserContext);
  // console.log("userINfo",setUserInfo);
  console.log("userContxo",UserContext);
  useEffect(() => {
    fetch('https://blog-m8ji.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log("Userinf",userInfo); 
        // state not updating
      });
    });
  }, []);
  
  function logout(){  

    fetch("https://blog-m8ji.onrender.com/logout",{ 
      credentials:'include',
      method: 'POST',
    })

    setUserInfo(null);
  }
  

  const username=userInfo?.username;
  console.log("USerINf",userInfo);
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