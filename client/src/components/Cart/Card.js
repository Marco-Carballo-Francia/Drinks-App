import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { deleteCartOne, addCart } from "../../redux/actions/actions.js";

const Card = ({ id, name, image, rating, precio, qty }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const user = useSelector((state) => state.user.user);
  let userId= user?._id;
  let itemsId= id;
  console.log("itemid",itemsId)

  function onClose() {
    dispatch(deleteCartOne(itemsId, userId));
  }

  function increment() {
    let item=itemsId;
    let itemCart={
            item: item,
            qtyCart: 1
        }
    dispatch(addCart(itemCart, userId));
  }

  function decrement() {
    let item=itemsId;
    let itemCart={
            item: item,
            qtyCart: -1
        }
    
    dispatch(addCart(itemCart, userId));
  }

  return (
    <div className={style.container}>
        <div>
            <span>{qty} X</span>
        </div>
      <div>
        <img className={style.img} src={image} alt="" />
      </div>

      <div className={style.containerName}>
        <h3 className={style.name}>{name}</h3>
      </div>
      <div className={style.containerInfo}>
        <p className={style.precio}> $ {precio * qty} </p>
      </div>
      <div className={style.statebuttons}>
      <button className={style.increment} onClick={increment}>+</button>
      <button className={style.increment} onClick={decrement}>-</button>
                </div>
                
                    
                    

      <div className={style.containerButton}>
        <button onClick={() => onClose()} className={style.button}>
          X
        </button>
      </div>
    </div>
  );
};

export default Card;

// {
  /*<div className={style.containerButton}>
                 <button className={style.button}>X</button>
             </div>
            
                <div className={style.containerImage} >
                    <img className={style.image} src={ image } alt="img no encontrada" />
                </div>
                <div className={style.containerName}>
                    <h3 className={style.name}>{name}</h3>
                </div>
                <div className={style.containerInfo}>
                    <p className={style.rating}>{rating}</p>
                    <p className={style.precio}>{precio}</p>
                </div>
*/
// }
