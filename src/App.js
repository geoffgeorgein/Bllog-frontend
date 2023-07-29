
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './post';
import Header from './header';

function App() {
  return (
    
      <Routes>

        <Route

          index element={

              <main>
              
                <Header/>

                <Post/>
                <Post/>
                <Post/>


              </main>
          }


        />

        <Route path={'/login'} element={

            <div>
              Login
            </div>
        }

        />  
        
      </Routes>

    
  );
}

export default App;
