import useComicBooks from "../hooks/UseComicBook";
import BookSearchForm from "../components/ComicSearchForm";
import { useState } from "react";


export default function Home(){
    const {comicBooks, loading, error} = useComicBooks();
    const [searchTerm, setSearchTerms] = useState("")
    const [selectedBook, setSelectedBook] = useState([]);



     function handleClick(e){
        let title = e.target.textContent.split(' ')
        title.shift();
        let result = title.join(' ')


        const foundBook =  comicBooks.find((book)=> book.title === result)
        // findBook.description
        // console.log(e)

        if (foundBook){
            setSelectedBook(foundBook)
        }else{
            console.error('Book not found')
        }

        
      
     }

     
   
    const content = ()=> {

    return loading ? (
    <>Loading...</>
    ) : error ? (
    <>{error}</>
    ): (
        <>

        <h3 id="Align">"Pick Your Potion: Choosing the Perfect Harry Potter Book for Your Next Adventure"</h3>
        <div className="Home">
            <BookSearchForm/>
    
           {comicBooks.map((comic) =>  (
               <div key = {comic.number} className="book-cards">
                <img
                src= {comic.cover}
                alt={comic.title}
                />
                <h4>{comic.title}</h4>
                <button onClick={(e) =>handleClick(e)}>LearnMore<br></br> {comic.title}</button>

               

            </div>
         ))}

          {selectedBook && 
             (
                <div className="book-description">
                    <h3>{selectedBook.title}</h3>
                    <p>{selectedBook.description}</p>
                </div>
             )}

      </div>
      </>
    )
    
    
  }

    
    return(
      
       <div> {content()}</div>
    );
}

