# Harry Potter Book Finder - React Web App

## Overview

This is a React-based web application created using **Vite** that allows users to browse information about Harry Potter books, characters, and spells. The app interacts with the **PotterAPI** to fetch data and display it in an interactive interface. This project includes multiple pages, each dedicated to different aspects of the Harry Potter universe.

## Live Site

You can view the deployed app here:  
[Harry Potter Book Finder - Live Site](https://sba-320h-react-web-application-jennkosy.onrender.com)

## Technologies Used

- **React**: The app is built using React for the front-end. React allows for building dynamic, component-based interfaces that are easy to maintain and extend.
- **Vite**: A modern and fast build tool for React that enables lightning-fast development and optimized production builds.
- **CSS/SCSS**: Styles are managed using regular CSS to provide a visually appealing layout and responsive design.
- **PotterAPI**: This app integrates with the **PotterAPI**, a RESTful API that stores images and information about Harry Potter books, characters, and spells. 
  - API Documentation: [PotterAPI GitHub Repository](https://github.com/fedeperin/potterapi)

## Features

- **Home Page**: Displays a list of Harry Potter books with a "Learn More" button for each. When clicked, the book's description is displayed below the respective book.
- **Character Page**: Lists Harry Potter characters including Hogwarts students, professors, and other notable figures from the series.
- **Spell Page**: Provides details about spells from the Harry Potter universe.
- **Search Page**: Allows users to search for books, characters, and spells.
- **Hamburger Menu**: A mobile-friendly navigation menu that provides easy access to the pages on small screens.
  
### Navigation Links:
- **Home**: Landing page with a list of books.
- **Book Info**: Information on each book.
- **Characters**: Lists of characters from the Harry Potter universe.
- **Spells**: Lists of magical spells.
- **Search**: A search bar to explore books, characters, or spells.

## Project Structure

The application follows a modular structure with separate folders for components, hooks, services, pages, and styles. Here's a brief breakdown of the directory structure:

```
src/
|-- components/   # Reusable UI components like buttons, book cards, etc.
|-- hooks/        # Custom hooks for API calls and data fetching.
|-- services/     # Functions for interacting with external APIs.
|-- pages/        # Different pages like Home, Book Info, Characters, etc.
|-- styles/       # CSS/SCSS files for styling the app.
|-- App.jsx       # The main app component that holds the routes.
|-- main.jsx      # The entry point for the React app.
```

## API Integration

This app uses the **PotterAPI** to fetch data. The API provides the following resources:

- **Books**: Information on all Harry Potter books.
- **Characters**: Data about characters in the Harry Potter universe.
- **Spells**: Information on various spells from the wizarding world.

The API documentation can be found here: [PotterAPI Documentation](https://github.com/fedeperin/potterapi)

## How to Run the App Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/harry-potter-book-finder.git
    ```

2. Navigate into the project folder:
    ```bash
    cd harry-potter-book-finder
    ```

3. Install dependencies using npm:
    ```bash
    npm install
    ```

4. Run the app locally in development mode:
    ```bash
    npm run dev
    ```

5. Open the app in your browser at `http://localhost:3000`.

## Unsolved Problems / Limitations

- **Error Handling**: There are still some improvements to be made regarding error handling for API requests, especially in cases of network failure or invalid responses.
- **Search Functionality**: The search page could be further optimized to handle more specific search queries and provide better user feedback.
- **Styling for Larger Screens**: The design is primarily focused on mobile views. Further improvements are needed for desktop responsiveness.

## Future Improvements

- **Enhanced Search**: Add more search filters for specific categories like books, characters, and spells.
- **Advanced Character Details**: Include detailed information for each character, such as background stories and significant events.
- **Theme Toggle**: Implement a dark/light mode toggle for a better user experience.
  
## Acknowledgments

This app uses data from the **PotterAPI**, a fantastic resource for all Harry Potter fans. 

- **API Documentation**: [PotterAPI GitHub Repository](https://github.com/fedeperin/potterapi)

---

Enjoy exploring the magical world of Harry Potter!
