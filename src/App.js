import React, { useState } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
import GalleryView from './GalleryView';
import './App.css';

function App() {
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = event => {
    const largeImageUrl = event.target.dataset.source;
    setLargeImageURL(largeImageUrl);

    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <GalleryView openModal={openModal}></GalleryView>

      {showModal && (
        <Modal onClick={openModal} onClose={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </Container>
  );
}

export default App;
