import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Add from './components/Add';
import View from './components/View';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>PRODUCTS  MANAGEMENT</h1>
      <Navbar/><br/>
      <Routes>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/' element={<View/>}></Route>
   </Routes>
    </>
  )
}

export default App