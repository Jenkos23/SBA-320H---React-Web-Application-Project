import UseSpellBounds from "../hooks/UseSpells"

export default function SpellBound(){
    const {spells, loading} = UseSpellBounds();

    if (loading) {
        return <div>Loading</div>
    }

  return(
    <>
     <h3 id="Align">"Accio Magic! Choosing Your Perfect Spell in the World of Harry Potter"</h3>
    <div className="Home">
        {spells && spells.length > 0 ? (
            spells.map(spell => (
                <div key = {spell.index} className="book-cards">
                    <div id="character">Spell: {spell.spell}</div>
                    <p id="char">Uses: {spell.use}</p>
                </div>

            )) 
        ): (

            <div>No spells found!</div>
        )}
    </div>
    </>
  )
}