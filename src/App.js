import React, { useState } from 'react';
import { AppProvider } from './contexts/AppContext';
import Carousel from './components/Carousel';
import SearchBar from './components/Searchbar';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (

  <AppProvider>
  <div className="App">
    <header>
      <h1>Video Streaming Platform</h1>
        <SearchBar />
        <button onClick={handleOpenModal} className="login-btn">Login/Sign-Up</button>
      </header>
      <Carousel />  
      {isModalOpen && <Modal closeModal={handleCloseModal} />}
    </div>
  </AppProvider>
    
  );
}

export default App;