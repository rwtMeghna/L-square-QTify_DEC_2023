import React , {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Outlet } from 'react-router-dom';
import { fetchNewAlbums, fetchTopAlbums } from './Api/Api';
// import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  const [searchData , useSearchData]=useState();
 const[data , setData]=useState({});

 const generateData=(key , source)=>{
  source().then((data)=>{
    setData((prevData)=>{
      return {...prevData , [key]:data};
    });
  });
 };


 useEffect(()=>{
  generateData("topAlbums" , fetchTopAlbums);
  generateData("newAlbums" , fetchNewAlbums);
  //  generateData("songs" , fetchSongs);
 } , []);

const{ topAlbums=[] , newAlbums=[] , songs=[] }=data;

  return ( 
  <>
  <div>
    <Navbar searchData={[...topAlbums, ...newAlbums]} />
    <Outlet context={{data: {topAlbums , newAlbums , songs} }}/>
    </div>
    </>
  );
}


export default App;