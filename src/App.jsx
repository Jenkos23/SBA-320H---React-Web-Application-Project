import { useState, useEffect} from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SearchComic from './components/ComicSearchForm';
import Navbar from './components/Navbar';
import BookDescription from './components/BookDescription';
import BookCharacter from './components/BookCharacter';
import SpellBound from './components/Spell';




export default function App() {
  return(
    <div>
      
      <Router>
        <Navbar/>
        <h2>Welcome to the Harry Potter Comic Book Finder</h2>
 
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path = "/bookdescription" element ={<BookDescription/>}/>
           <Route path = "/character" element ={<BookCharacter/>}/>
           <Route path = "/spell" element = {<SpellBound/>}/>
           <Route path = "/Search" element = {<SearchComic/>}/>
        </Routes>
     </Router>
    </div>
  )
}