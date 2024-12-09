import useComicBooks from "../hooks/UseComicBook";

export default function BookDescription(){
    const {comicBooks} = useComicBooks();
   

    return(
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
    )
}