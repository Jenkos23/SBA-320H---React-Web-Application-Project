import { useState } from "react";

export default function HamburgerMenu(){
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger =()=>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <>
        <div className={`hamburger ${hamburgerOpen ? 'open' : ''}`} onClick={toggleHamburger}>
            <div className=" burger burger1"/>
            <div className="burger burger2"/>
            <div className=" burger burger3"/>
        
        </div>
        
        </>
    )
}
