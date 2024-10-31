import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Layout from './Layout';
import Projects from './pages/projects/projects';

function App() {
 
  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    )
  );

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
