import React from 'react';
import { Modal } from 'flowbite-react';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import './SavingModal.css';
import SavingToast from '../savingToast/SavingToast';

const SavingModal = (props) => {
  return (
    <>
      <Modal
        show={!!props.openModal}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Footer />
        <Modal.Body className="text-center">
          {props.loading && <LoadingSpinner className="spinner" />}
          {props.openModal === 'success' && <SavingToast type="success" />}
          {props.openModal === 'error' && <SavingToast type="error" />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SavingModal;
