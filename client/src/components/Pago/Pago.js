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
  "pk_test_51JspxrIafd4QaO96MG6jnSTDhfPKglWb9rITWrZg7Q8BgSbYhSTelWaPKnPlPFmtMfaQrhb4Z16yNOBkt0A7lu3200ajugsCkT"
);

const CheckoutFrom = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useSelector((state) => state.cart);
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
      dispatch(createTicket({ id, amount: 10000 }));
      elements.getElement(CardElement).clear();
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
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
