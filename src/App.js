import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {lazy,Suspense} from 'react'
//import Home from './Home.js'
//import About from './About.js'
//import Contactus from './Contactus.js'
//import Login from './Login.js'
//from react version 16 lazy concept was added so that we dont directly import the js files 
//we do use lazy method to import
//in the network section we can see the bundle.js in this file all the components code is available 
const Home=lazy(()=>import('./Home'));
const About=lazy(()=>import('./About'));
const Contactus=lazy(()=>import('./Contactus'));
const Login=lazy(()=>import('./Login'));
function Header(){
  return (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contactus</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
  )
}
const App = () => {
  return (
    <>
    <div>
     <BrowserRouter>
     <Header/>
  <Suspense>
     <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     </Suspense>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App