import { useEffect, useState } from "react";
import { getSpellBoundDetails } from "../services/BooksAPI.mjs";


export default function UseSpellBounds(){
    const [spells, setSpells] = useState('');
    const [loading, setLoading] = useState(true);


    async  function fetchSpellDetails () {
        const spellDetails = await getSpellBoundDetails();
        setSpells(spellDetails);
        setLoading(false);
        
    }

    useEffect(() => {

        fetchSpellDetails();
    }, []

);

    return {spells, loading}
}

