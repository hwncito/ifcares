import React from "react";
import { Modal } from "flowbite-react";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import "./SavingModal.css";
import SavingToast from "../savingToast/SavingToast";

const SavingModal = (props) => {
  return (
    <>
      <Modal
        show={!!props.openModal}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Body className="modal-body">
          {props.loading && (
            <div className="saving-spinner">
              <LoadingSpinner />
            </div>
          )}
          {props.openModal === "success" && <SavingToast type="success" />}
          {props.openModal === "error" && <SavingToast type="error" />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SavingModal;
