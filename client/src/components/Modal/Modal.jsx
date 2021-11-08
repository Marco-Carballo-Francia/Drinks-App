import React, { useState } from 'react';
import Modal from 'react-modal';
import style from './Modal.module.css';
import { setModal } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";


const Mayor = () => {
  let subtitle;

  const dispatch = useDispatch();
  const { modal } = useSelector(state => state.functionality);

  const [modalIsOpen, setIsOpen] = React.useState(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#000000',
      color: 'rgb(255, 255, 255)',
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(setModal(true))
  }


  return (
    <div >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={style.ctnText} >
          <h2 className={style.title} >¿SOS MAYOR DE 18 AÑOS?</h2>

          <div className={style.ctnBtns}>
            <button className={style.btn} onClick={closeModal}> SI </button>
            <button className={style.btn}>NO</button>
          </div>

        </div>

      </Modal>
    </div>
  )

};

export default Mayor;