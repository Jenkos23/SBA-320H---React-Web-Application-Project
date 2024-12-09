import { Link } from "react-router-dom"
import '../styles/navbar.css'
import '../styles/hamburger.css'
import HamburgerMenu from "./HamburgerMenu"

export default function Navbar(){
    return(
       
        <div className="navbar">
            <HamburgerMenu/>
            <nav>
                <Link to = "/">Home </Link>
            
                <Link to = "/bookdescription">Book-Info</Link>
                <Link to = "/character">Characters</Link>
                <Link to = "/spell">Spell</Link>
                <Link to = "/search">Search</Link>
                
            </nav>


        </div>
    )
}