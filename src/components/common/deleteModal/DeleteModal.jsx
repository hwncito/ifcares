import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import axios from 'axios';

const DeleteModal = ({ onClose, student }) => {
  const [openModal, setOpenModal] = useState('pop-up');
  const props = { openModal, setOpenModal };

  const handleCloseModal = () => {
    setOpenModal(undefined);
    onClose && onClose();
  };

  const handleDeleteStudent = () => {
    const deleteData = {
      actionType: 'delete',
      values: [student.name, student.site],
    };

    console.log(deleteData);

    const GAS_DELETE_URL =
      'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbyQX7V9R8g1VEMAww_G8UMW9iTQyewe1CcZi90-SU0YFne3xTg5Qa_40lbqWp2w6Tlu/exec';

    axios
      .post(GAS_DELETE_URL, JSON.stringify(deleteData), {
        headers: {
          'Content-Type': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
        },
      })
      .then((response) => {
        console.log('Student deleted successfully:', response.data);
        handleCloseModal();
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
        handleCloseModal();
      });
  };

  return (
    <>
      <Modal
        show={props.openModal === 'pop-up'}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Footer />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to <b>delete</b> {student.name}?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteStudent}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={handleCloseModal}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteModal;
