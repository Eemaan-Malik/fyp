import React from 'react';
import '../index.css'; // Import modal CSS for styling

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times; {/* Close button */}
        </button>
        {children} {/* Render the children, which will be your forms */}
      </div>
    </div>
  );
}

export default Modal;
