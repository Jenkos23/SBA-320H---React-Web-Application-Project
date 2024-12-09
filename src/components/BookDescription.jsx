import useComicBooks from "../hooks/UseComicBook";

export default function BookDescription(){
    const {comicBooks} = useComicBooks();
   

    return(
        <>
        <h3  id="Align">"Uncover the Magic: A Sneak Peek into Harry Potter"</h3>
        <div className="Book-Info">
            {comicBooks.map((book) => (
                <div key = {book.number} className="book-cards" >
                <h3>{book.title}</h3>
                <p>Book Description: {book.description}</p>
                <p>Release Date: {book.releaseDate}</p>
                <p> Number of Pages: {book.pages}</p>
                </div>
            )
            )

            }

        </div>
        </>
    )
}