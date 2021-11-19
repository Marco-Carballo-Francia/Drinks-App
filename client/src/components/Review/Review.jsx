import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import style from "./Review.module.css";
import { rateProduct } from "../../redux/actions/actions";
import Modal from 'react-bootstrap/Modal';
import { BsCheck2Square } from "react-icons/bs";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

export default function Review({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = useSelector(state => state.user);


  const dispatch = useDispatch();

  const stars = Array(5).fill(0);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const [values, setValues] = useState('');

  const handleClick = (value) => {
    setCurrentValue(value)
  };

  const handleMouseOver = (value) => {
    setHoverValue(value)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  };

  const handleOnChange = e => {
    setValues(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(rateProduct({ number: currentValue, id }))
    setValues('')
    handleShow();
    setTimeout(handleClose, 2000);
  }

  return (
    <div className={style.ctnSuperior}>
      <h1 className={style.titulo} >Califica este producto</h1>
      <div >
        {
          stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={() => handleMouseLeave}
              />
            )
          })
        }
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={style.modalHead}  >
          <h1 className={style.titleModal} >Recibimos tu calificacion! <BsCheck2Square className={style.iconModal} /></h1>
        </Modal.Header>
        <p className={style.textoModal}>  Gracias {user?.nombre ? user?.nombre : user?.user?.nombre}! Vamos a tener en cuenta tu opinion</p>
      </Modal>

      <div>
        <textarea className={style.textarea}
          onChange={handleOnChange}
          type="text"
          value={values}
          placeholder="Deja un comentario..."
        />
      </div>
      <button onClick={() => handleSubmit()} className={style.btnEnviar}>Enviar</button>
    </div>
  )
};