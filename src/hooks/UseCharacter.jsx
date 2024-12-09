import { useEffect, useState } from "react";
import { getCharacterDetails } from "../services/BooksAPI.mjs";


export default function UseCharacter(){
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchHarryCharacters() {
        const characterData = await getCharacterDetails();
        console.log(characterData)
        setCharacters(characterData)
        setLoading(false);
        
    }
  
    useEffect(() => {
        fetchHarryCharacters();

    }, []
);
    

  return {characters, loading, error}
  
}

