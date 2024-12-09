import { useState, useEffect } from "react";
import { getComicDetails } from "../services/BooksAPI.mjs";
import axios from "axios";




export default function useComicBooks(){
    const [comicBooks, setComicBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    async function fetchHarryBook(){
        const comicData = await getComicDetails();
        setComicBooks(comicData)
        setLoading(false)
    
    }

    useEffect(() =>{

      fetchHarryBook()

    }, []
    );

    return {comicBooks, loading, error}
}