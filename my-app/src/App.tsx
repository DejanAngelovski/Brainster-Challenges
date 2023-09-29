import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import ArtistsList from './components/ArtistsList';
import ArtistsPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage';
import artists from './db';

type Artist ={
  artist:{
    id: number;
    name: string;
    cover: string;
    bio: string;
    albums: {
        albumId: string;
        title: string;
        year: number;
        cover: string;
        price: number;
    }[];
}[];
}


function App() {


  
  return (
    <div className="App">

    <Link to={'/'}><Navbar /></Link>
    
      <Routes>
        <Route path='/' element={<ArtistsList/>}/>
        <Route path='/artists/:id' element={<ArtistsPage/>}/>
        <Route path='/artists/:id/:albumId' element={<AlbumPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
