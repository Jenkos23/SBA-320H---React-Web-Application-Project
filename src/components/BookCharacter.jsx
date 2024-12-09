import UseCharacter from "../hooks/UseCharacter";

export default function BookCharacter(){
    const {characters} = UseCharacter();

    return(
        <>
        <h3 id="Align">"Meet the Magic Makers: Exploring the Iconic Characters of Harry Potter"</h3>
        <div className="Home">
            
            {characters.map((character) => (
                <div key={character.index} className="book-cards" >
                    
                    <h3 id="character">{character.fullName}</h3>
                    <img
                    src= {character.image}
                    alt ={character.nickname}
                    
                    />
                    <p id="char">Nickname: {character.nickname}</p>
                    <p id="char">Hogwarts-House: {character.hogwartsHouse}</p>
                    <p id="char">Birth-date: {character.birthdate}</p>
                    <p id="char"> Children:
                    {character.children && character.children.length > 0 ? (
                        <ul>
                        {character.children.map((child, index)=>(
                            <li key = {index}>{child}</li>
                         ))}


                        </ul>
                    ):(
                        <span> No Children listed</span>

                    )}
                        </p>
                    <p id="char"> InterpretedBy: {character.interpretedBy}</p>




                </div>
            ))}
        </div>
        </>
    )

}