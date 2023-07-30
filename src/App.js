
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './post';
import Header from './header';
import Layout from './layout';
import Register from './pages/register';
import LoginPage from './pages/loginPage';

function App() {
  return (
    
      <Routes>

      <Route path='/' element={<Layout/>}>

      <Route

          index element={

              <main>
              
                

                <Post/>
                <Post/>
                <Post/>


              </main>
          }


          />

          <Route path={'/login'} element={<LoginPage/>}

          /> 

          <Route path={'/register'} element={

          <Register/>
          }

          /> 


      </Route>

         
        
      </Routes>

    
  );
}

export default App;
