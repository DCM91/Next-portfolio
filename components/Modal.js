import React from 'react';

function Modal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;