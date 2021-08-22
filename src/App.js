import './App.css';
import { useState, useEffect } from 'react';
import DashBoard from './components/DashBoard';

import { Routes, Route} from 'react-router'
import Home from './components/Home'
import AppBar from './AppBars/AppBar'
import { useDispatch, useSelector } from 'react-redux';
import {initWeb3} from './store/ui/index'

function App() {
 const dispatch = useDispatch()
useEffect(()=>{
dispatch(initWeb3)
},[])




  return (
    
    <div className="App">

<Routes >
  <Route path="/" element={<Home ></Home>}></Route>
  <Route path="/:referrer" element={<Home ></Home>}></Route>
  <Route path="dashboard" element={<DashBoard ></DashBoard> }></Route>
</Routes>



    </div>)
}

export default App;
