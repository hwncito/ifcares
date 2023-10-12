import React from "react";
import { Modal } from "flowbite-react";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import "./SavingModal.css";

const SavingModal = (props) => {
  return (
    <>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Footer />
        <Modal.Body className="">
          <div className="text-center">
            {props.loading ? (
              <div className="container">
                <LoadingSpinner className="spinner" />
              </div>
            ) : (
              <>
                {props.openModal === "success" &&
                  "Student edited successfully."}
                {props.openModal === "error" &&
                  "Student could not be edited. Try again later."}
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SavingModal;
