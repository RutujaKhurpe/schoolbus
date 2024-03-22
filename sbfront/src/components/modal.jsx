import React from 'react';
import { Modal as BootstrapModal, ModalHeader, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ show, onHide, title, children }) => {
  return (
    <BootstrapModal show={show} onHide={onHide} className="modal-dialog-centered">
      <ModalHeader closeButton>
        <h4 className="modal-title">{title}</h4>
      </ModalHeader>
      {/* Add a scrollbar to the modal body */}
      <BootstrapModal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        {children}
      </BootstrapModal.Body>
      <div className="modal-footer">
        <Button asChild onClick={onHide}>Close</Button> 
      </div>
    </BootstrapModal>
  );
};

export default Modal;