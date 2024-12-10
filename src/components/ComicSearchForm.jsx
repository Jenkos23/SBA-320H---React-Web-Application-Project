import '../index.css'
import { useState } from 'react';
import useComicBooks from '../hooks/UseComicBook';

export default function BookSearchForm() {
  const {comicBooks,error} = useComicBooks();
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

    function handleSearch(e) {
      e.preventDefault();
      const searchValue = searchInput.toLowerCase();
      const filteredBooks = comicBooks.filter((book) =>
         book.title.toLowerCase().includes(searchValue)
      );

      if (filteredBooks.length === 0){
        alert(`No books found! try keywords: sorcerer's, stone, chamber, secrets, prisoner, Azkaban, fire, Half-blood, prince `);
      }
      else(filteredBooks.length === '')
      alert(`Input a book title! try keywords: sorcerer's, stone, chamber, secrets, prisoner, Azkaban, fire, Half-blood, prince`)
      (setFilteredData(filteredBooks))

  
    }

        // Handle input changes and update searchInput state
  function handleInputChange(e) {
    (setSearchInput(e.target.value));
  }
   
    return (
      <>
      <h3 id='Align'>Find Your Magic: Search the World of Harry Potter</h3>
      <div className="search-container">
        <form onSubmit={handleSearch} action="">
          <label htmlFor="">
            <input
              type="search"
              value={searchInput}
              onChange={handleInputChange}
              placeholder="Search for a book here..."
            />
          </label>
          <div className ="Home">
              {filteredData.map ((book) => (
                <div key = {book.number} className="book-cards"> 
                <img
                src = {book.cover}
                alt = {book.title}
                />
                <h4>{book.originalTitle}</h4>
                <p> Released Date: {book.releaseDate}</p>
              
                </div>
                
              ))}

            
            
          
          </div>
          <button type="submit">Search</button>
        </form>
       
      </div>

      </>

      
    );
  }
  
