import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart, setTotal } from "../../redux/actions/actions.js";
import style from "./Cart.module.css";
import Card from "./Card.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector(state => state.user.user);
  const history = useHistory();

  function totalCart(array) {
    let total = 0;
    for (var i = 0; i < array?.length; i++) {
      console.log(array[i]?.precio);
      let neto = price(array[i]?.precio);
      let bruto = neto * array[i]?.qty;
      total = total + bruto;
    }
    return total;
  }
  function price(precio) {
    let total;
    let splitprice = precio?.split(",");
    if (splitprice[0]?.length <= 4) {
      if (splitprice[0][0] === "$") {
        let neto = splitprice[0]?.split("$");
        total = parseInt(neto[1]);
      } else {
        total = parseInt(splitprice[0]);
      }
    } else {
      let numberFix = splitprice[0]?.split(".").join("");
      let finishNumber = numberFix?.split("$")[1];
      total = parseInt(finishNumber);
    }
    return total;
  }

  const handleClick = () => {
    if (user !== null) {
      dispatch(setTotal(totalCart(cart)));
      history.push('/checkout');
    } else {
      history.push('/login');
    }
  }

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.cards}>
        {cart?.length ? (
          cart.map((p) => {
            return (
              <Card
                id={p._id}
                name={p.name}
                image={p.imagen}
                rating={p.rating}
                precio={price(p.precio)}
                qty={p.qty}
              />
            );
          })
        ) : (
          <p></p>
        )}
      </div>
      <div className={style.containerTotal}>
        <div className={style.preciFinal}>
          <p className={style.total}>
            <b>TOTAL: </b> $ {totalCart(cart)}
          </p>
        </div>
        <div>
          <button onClick={handleClick} className={style.btn}>PAGAR</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;