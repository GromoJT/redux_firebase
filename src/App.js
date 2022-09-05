import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Layout/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import CounterPage from './pages/CounterPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import SigneUpPage from './pages/SigneUpPage';
import { AuthContextProvider } from './contexs/AuthContext';
import { useEffect, useState } from 'react';

function App() {

  

  return (      
      <BrowserRouter>
          <AuthContextProvider>
            <div id='rcon'>

            
          <Navbar/>
          <Routes>
            
              <Route path="/" element={<Home/>}/>
              <Route path="/counter" element={<CounterPage/>}/>
              <Route path="/todo" element={<About />}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/signup" element={
                
                  <SigneUpPage/>
                
              }/>
              <Route path="*" element={<ErrorPage/>}/>
            
          </Routes>
            </div>
          </AuthContextProvider>
          
      </BrowserRouter>
      
    
  );
}

export default App;
