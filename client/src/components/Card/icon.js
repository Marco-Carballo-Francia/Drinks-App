import React, {useState} from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import img from '../../Iconos/image-default-Card.jpeg';
import icon from "../../Iconos/icon.png";
import Rating from '../Rating/Rating';
import icono from "../../Iconos/iconoo.png";

const Card = (prod) => {
    let p = prod.prod
    // console.log('prod', prod.prod.name);

    function addDefaultSrc(ev){
        ev.target.src = img; 
    };

   const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
        }
 
    return (
        <div className={style.Card}>
            <Link className={style.link} to={`/detail/${p._id}`}>
                <div >
                    <img onError={addDefaultSrc} className={style.image} src={p.imagen} alt="img no encontrada" />
                </div>
                <div >
                    <h3 className={style.name}>{p.name}</h3>
                </div >
                <div className={style.PR}>
                   {/*  <p className={style.rating}>{p.rating}</p> */}
                    <p className={style.precio}>{p.precio}</p>
                </div>
            </Link>
            <Rating rating={p.rating} numReviews={5}/>
            <div >
                {  
                 isActive?             
                <button onClick={toggleClass} className={style.btn}>Agregar al carrito</button>
                :<img className={style.btnn} src={icon} />
                }
            </div>
        </div>
    );
};

export default Card;