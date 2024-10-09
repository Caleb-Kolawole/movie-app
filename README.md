
# Video Streaming Platform Landing Page

This project is a functional landing page for a video streaming platform, developed using React. It features a dynamic carousel to showcase trending movies, a search bar to filter the displayed content, and responsive design for both desktop and mobile views. The project uses React's Context API for global state management and Slick Carousel for the movie slider.

## Features

- **Dynamic Carousel**: Displays a list of trending movies, allowing users to scroll through the content.
- **Search Functionality**: Users can search for movies by title using the search bar, which filters the carousel in real-time.
- **Responsive Design**: The layout adjusts smoothly between desktop and mobile screens.
- **Modal Form**: A login/signup button triggers a modal form (if implemented).
- **React Context API**: Used for managing global state (search term) across the app.
- **Performance Optimizations**: The page has been optimized for fast load times using best practices.

## Installation

To run this project locally, follow these steps:


1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. Open `http://localhost:3000` in your browser to view the app.

## Project Structure

```bash
├── public
├── src
│   ├── components
│   │   ├── Carousel.js    # Carousel component to display trending movies
│   │   ├── SearchBar.js   # Search bar component to filter movies by title
│   ├── context
│   │   └── AppContext.js  # React Context API for managing global state
│   └── App.js             # Main application component
├── package.json
├── README.md
└── .gitignore
```

## Key Decisions

- **State Management**: The project uses the **React Context API** for state management. This was chosen for simplicity since the application has a small state (only search functionality), and it avoids the overhead of Redux.
- **Performance**: The carousel and search functionality were optimized by using a filtered dataset and conditional rendering. Best practices like minimizing re-renders and using key attributes in lists were applied to improve performance.
- **Responsive Design**: Media queries and responsive settings in **Slick Carousel** were used to ensure the UI works well on both mobile and desktop screens.

## How to Use

1. **Search Movies**: Type in the search bar to filter movies based on their title.
2. **Navigate the Carousel**: Use the navigation arrows or dots to scroll through the list of trending movies.
3. **Responsive Layout**: Resize the window to see how the layout adjusts between mobile and desktop.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **React Context API**: For global state management (search functionality).
- **Slick Carousel**: For implementing the carousel to display movies.
- **CSS**: For styling and making the layout responsive.
  
## Future Improvements

- **Authentication**: Add a modal for login/sign-up functionality using a form.
- **Backend Integration**: Replace the mock movie data with real data from a movie database API (e.g., The Movie Database API).
- **Advanced Search**: Add filters for categories, release date, and more.
