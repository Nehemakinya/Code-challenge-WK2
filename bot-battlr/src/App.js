import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Favourites from './components/Favourites';
import Products from './components/Products';
// import Home from './components/Home';
import {Routes, Route, Navigate} from 'react-router-dom';


function App() {
  const [favouriteItem, setFavouriteItem] = useState([])

  return (
    <div className="container">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/products" element={<Products setFavouriteItem={setFavouriteItem} favouriteItem={favouriteItem}/>} />
        <Route path="/favourites" element={<Favourites favouriteItem = {favouriteItem}/>} />
      </Routes>

    </div>
  )
}

export default App;
