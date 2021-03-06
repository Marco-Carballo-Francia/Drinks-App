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
import InfoTarjeta from "../InfoTarjeta/InfoTarjeta";
import Dates from '../Profile/Dates';
import style from './Checkout.module.css'


const stripePromise = loadStripe(
  "pk_test_51JtExYJd2HHGxuO1Ec9PcGQFvQ2SxfWHFmkzlPW43AvWuOESsnvdYPEk5TyxF5oIC9J5GbCllNiUk3CP7jUH9mTh00BLf6GTMW"
);

const Checkout = () => {
  return (
    <div className={style.ctnSuperior}>
      <Elements stripe={stripePromise} >
        < Dates />
        <InfoTarjeta />
      </Elements>
    </div>

  );
};

export default Checkout;
