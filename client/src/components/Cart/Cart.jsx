import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart, setTotal } from "../../redux/actions/actions.js";
import style from "./Cart.module.css";
import Card from "./Card.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  let userId= user?._id;
  console.log("userid", cart)
  const history = useHistory();
  

  function totalCart(array) {
    let total = 0;
    for (var i = 0; i < array?.length; i++) {
     
      let neto = array[i]?.item ? price(array[i]?.item?.precio): 0;
      let bruto = neto? neto * array[i]?.qtyCart :0;
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
   return  dispatch(getCart(userId));
  }, [dispatch, cart.length]);

  return (
    <div className={style.container}>
   
      <div className={style.cards}>
        {cart?.length ? (
          cart.map((p) => {
            return (
              <Card
                id={p.item?._id}
                name={p.item?.nombre}
                image={p.item?.imagen}
                rating={p.item?.rating}
                precio={p.item?.precio ? price(p.item.precio) : null}
                qty={p?.qtyCart}
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
            <b>TOTAL: </b> $ { cart ? totalCart(cart): null}
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