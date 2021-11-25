import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    // console.log('addEventListener');
    window.addEventListener('keydown', handleCloseClick);

    return () => {
      // console.log('removeEventListener');
      window.removeEventListener('keydown', handleCloseClick);
    };
  }, []);

  const handleCloseClick = event => {
    if (event.currentTarget === event.target || event.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleCloseClick}>
      <div className="Modal">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
