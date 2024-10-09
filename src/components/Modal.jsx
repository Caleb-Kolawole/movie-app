import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login/Sign-Up</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default Modal;