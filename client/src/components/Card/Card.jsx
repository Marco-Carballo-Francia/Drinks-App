import React, { useState} from 'react';
import style from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from '../../Iconos/image-default-Card.jpeg';
import Rating from '../Rating/Rating';
import { addCart } from "../../redux/actions/actions.js";

const Card = (prod) => {

     const cart = useSelector((state) => state.cart.cart);
     const user = useSelector(state => state.user.user);
     const id= user?._id;
    let p = prod.prod
    const dispatch=useDispatch();
    // const [clicked, setClicked] = useState(false)

    function onClick() {
        // setClicked(true);
        let item=p._id;
        let itemCart={
            item: item,
            qtyCart: 1
        }
        console.log(itemCart);
        dispatch(addCart(itemCart, id));
    }

    function addDefaultSrc(ev) {
        ev.target.src = img; 
    };

    return (
        <div className={style.Card}>
            <Link className={style.link} to={`/detail/${p._id}`}>
                <div >
                    <img onError={addDefaultSrc} className={style.image} src={p.imagen} alt="img no encontrada" />
                </div>
                <div >
                    <p className={style.name}>{p.nombre}</p>
                </div >
                <div className={style.PR}>
                    {/*  <p className={style.rating}>{p.rating}</p> */}
                    <Rating rating={p.rating} numReviews={5} />
                    <p className={style.precio}>{p.precio}</p>
                </div>
            </Link>
            
            <div >
                <button onClick={()=> onClick()} className={style.btn}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Card;