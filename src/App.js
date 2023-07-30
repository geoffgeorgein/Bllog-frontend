
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './post';
import Header from './header';
import Layout from './layout';

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

          <Route path={'/login'} element={

            <div>
              LogGED IN
            </div>
          }

          /> 


      </Route>

         
        
      </Routes>

    
  );
}

export default App;
