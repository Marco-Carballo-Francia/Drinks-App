import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart, setTotal, deleteCartAll } from "../../redux/actions/actions.js";
import style from "./Cart.module.css";
import Card from "./Card.js";
import Loading from "../Loading/Loading";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  let userId= user?._id;
  console.log("userid", cart)
  const history = useHistory();


  function borrar(){
    dispatch(deleteCartAll(userId))
  }
  

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
  dispatch(getCart(userId));
  }, []);

  return (
    <div className={style.container}>
   
      <div className={style.cards}>
        {cart?.length ? (
          cart.map((p) => {
            return (
              <div>
              {
              p.item?._id
              ?
              <Card
                id={p.item?._id}
                name={p.item?.nombre}
                image={p.item?.imagen}
                rating={p.item?.rating}
                precio={p.item?.precio ? price(p.item.precio) : null}
                qty={p?.qtyCart}
              />
              : 
          (<Loading />)
        
      }
              
              </div>
            );
          })
        ) : null
      }
      {cart.length>1 ? <button onClick={()=>borrar()} className={style.borrar}>Limpiar</button> : null}
      </div>
      <div className={style.containerTotal}>
        <div className={style.preciFinal}>
          <p className={style.total}>
            {cart.length >= 1 ? <b>TOTAL: $ </b> : null}  { cart.length >= 1 ? totalCart(cart): <p>Aún no hay productos</p>}
          </p>
        </div>
        <div>
        {cart.length >=1 ?
          <button onClick={handleClick} disabled={cart.length<1} className={style.btn}>PAGAR</button>
          : <Link to="/"><button className={style.btn}>Agregar</button></Link>
        }
          
        </div>
      </div>
    </div>
  );
};

export default Cart;