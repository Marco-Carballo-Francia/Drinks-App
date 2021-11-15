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


const InfoTarjeta = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { cart, total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const userId = user?.id
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    setLoading(true);
    if (!error) {
      const id = paymentMethod.id;
      dispatch(createTicket({ id, amount: total, cart, userId }));
      elements.getElement(CardElement).clear();
      setLoading(false);
      dispatch({ type: "RESET_CART" })
    }
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
      <form onSubmit={handleSubmit} className={style.form}>
        <p className={style.title}>Datos de la tarjeta </p>
        <CardElement
          options={{
            style: {
              base: inputStyle,
            },
          }} />
        <div className={style.ctnBtn}>
          <p>{total}</p>
          <button type="submit" disabled={!stripe} className={style.btn}>
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
    </div>
  );
};


export default InfoTarjeta
