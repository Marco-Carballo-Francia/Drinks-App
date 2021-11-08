import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { createTicket } from "../../redux/actions/actions";

const stripePromise = loadStripe(
  "pk_test_51JtExYJd2HHGxuO1Ec9PcGQFvQ2SxfWHFmkzlPW43AvWuOESsnvdYPEk5TyxF5oIC9J5GbCllNiUk3CP7jUH9mTh00BLf6GTMW"
);

const CheckoutFrom = () => {
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
      dispatch({type: "RESET_CART"})
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <p>{total}</p>
      <button type="submit" disabled={!stripe}>
      {
        loading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : "Pagar"
      }
      </button>
    </form>
  );
};

const Pago = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFrom />
    </Elements>
  );
};

export default Pago;
