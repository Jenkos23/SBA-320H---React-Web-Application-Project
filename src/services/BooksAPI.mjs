import axios from "axios";


export const getComicDetails = async ()=> {
    const url = `https://potterapi-fedeperin.vercel.app/en/books`

    try{
        const response = await axios.get(url);
        const comicResults = response.data|| [];
        return comicResults;
    }catch(error){
        console.error("Error fetching comic details:", error);
        return [];
    };
};



export const getCharacterDetails= async () => {
    const url = `https://potterapi-fedeperin.vercel.app/en/characters`
    
    try {
        const response = await axios.get(url);
        const characterResults = response.data || [];
        return characterResults;
        
    } catch (error) {
        console.error("Error fetching characters", error);
        return[];

       
        
    };
    
};

export const getSpellBoundDetails = async () => {
    const url = `https://potterapi-fedeperin.vercel.app/en/spells`
    

    try {
        const response = await axios.get(url);
        const spellResults = response.data 
        console.log(spellResults) || []
        return spellResults;
    } catch (error) {
        console.error ('Error fetching spells', error);
        
        return [];
    }
}