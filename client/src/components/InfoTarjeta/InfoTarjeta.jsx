import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import style from './infoTarjeta.module.css';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { createTicket } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { BsCheck2Square } from "react-icons/bs";



const InfoTarjeta = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { cart, total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const userId = user?._id
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(false);
  }

  const handleOrdenes = () => history.push('/profile');
  const handleSeguirComprando = () => history.push('/');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    console.log("paymentMethod", paymentMethod)
    setLoading(true);
    if (!error) {
      const id = paymentMethod.id;
      dispatch(createTicket({ id, amount: total, cart, userId }));
      elements.getElement(CardElement).clear();
      setLoading(false);
      setIsOpen(true)
      dispatch({ type: "RESET_CART" })
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
      padding: '30px',
    },
  };

  const inputStyle = {
    iconColor: '#c4f0ff',
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '18px',
    fontSmoothing: 'antialiased',
    ':-webkit-autofill': {
      color: '#000000 ',
    },
    '::placeholder': {
      color: '#96989A',
      fontWeight: '400',

    },

  }

  return (
    <div className={style.cnt}>
      <p className={style.title}>Datos de la tarjeta </p>
      <form onSubmit={handleSubmit} className={style.form}>
        <CardElement
          options={{
            style: {
              base: inputStyle,
            },
          }} />
        <div className={style.ctnBtn}>
          <p className={style.total}>TOTAL: ${total}</p>
          <button type="submit" onClick={openModal} disabled={!stripe} className={style.btn}>
            {
              loading ? (
                <div >
                  <span>Loading...</span>
                </div>
              ) : "Pagar"
            }
          </button>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={style.ctnModalTexto}>
          <h1 className={style.titleModal}> Felicitaciones! <BsCheck2Square className={style.icon} /></h1>
        </div>
        <p className={style.texto}>La compra se realizo con exito, ahora podes:</p>
        <div className={style.ctnBtnsModal}>
          <button className={style.btnModal} onClick={handleSeguirComprando} > Seguir Comprando </button>
          <button className={style.btnModal} onClick={handleOrdenes} >Ver ordenes</button>
        </div>

      </Modal>

    </div>
  );
};


export default InfoTarjeta
