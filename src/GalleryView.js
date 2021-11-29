import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import FetchGallery from './galleryApi';

function GalleryView({ openModal }) {
  const [query, setQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== '') {
      fetchGallery();
    }

    return () => {
      // сделать отмену фетча, чтобы не было утечки памяти
    };
  }, [query]);

  const onChangeQuery = searchQuery => {
    setQuery(searchQuery);
    setCurrentPage(1);
    setGallery([]);
    setError(null);
  };

  const fetchGallery = () => {
    setIsLoading(true);

    FetchGallery(query, currentPage)
      .then(addGallery => {
        setGallery(prevGallery => [...prevGallery, ...addGallery]);
        setCurrentPage(currentPage + 1);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  return (
    <div>
      {error && <h1>Error!</h1>}
      <Searchbar onSubmit={onChangeQuery} />

      <ImageGallery gallery={gallery} onClick={openModal}></ImageGallery>

      {isLoading && <p>Loading...</p>}
      {gallery.length > 0 && <Button onClick={fetchGallery}></Button>}
    </div>
  );
}

GalleryView.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default GalleryView;
