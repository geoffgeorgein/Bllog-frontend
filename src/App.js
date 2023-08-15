
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './post';

import Layout from './layout';
import Register from './pages/register';
import LoginPage from './pages/loginPage';
import { UserContextProvider } from './pages/UserContext';
import CreatePost from './pages/createPost';
import IndexPage from './pages/indexPage';
import PostPage from './pages/postPage';
import EditPost from './pages/editPost';

function App() {
  return (

      <UserContextProvider>
        <Routes>

        <Route path='/' element={<Layout/>}>

        <Route

            index element={<IndexPage/> }  />

            <Route path={'/login'} element={<LoginPage/>} /> 

            <Route path={'/register'} element={ <Register/> } /> 

            <Route path={'/create'} element={ <CreatePost/> }  /> 

            <Route path={'/post/:id'} element={ <PostPage/> }/> 
            <Route path={'/edit/:id'} element={ <EditPost/> }/> 


        </Route>

          
          
        </Routes>
      </UserContextProvider>

    
  );
}

export default App;
