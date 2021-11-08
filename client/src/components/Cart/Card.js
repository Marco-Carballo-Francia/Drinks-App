import React, {useState} from "react";
import {useDispatch} from "react-redux";
import style from "./Card.module.css";
import {deleteCartItem} from "../../redux/actions/actions.js";




const Card = ({id, name,image,rating,precio}) => {

    const dispatch=useDispatch();
    const [state, setState] = useState(1);

    function onClose(idcard){
       dispatch(deleteCartItem(idcard))
    }

    function increment(){
         setState(state + 1);
    } 

    function decrement(){

        setState(state - 1);
    }
    

	return (
		<div className={style.container}>
        <div>
                    <img className={style.img} src={image} alt="" />
                </div>
             
                <div className={style.containerName}>
                    <h3 className={style.name}>{name}</h3>
                </div>
                <div className={style.containerInfo}>
                    <p className={style.precio}> $ {precio * state} </p>
                </div>
                {/*<div className={style.statebuttons}>
                    <button onClick={increment}>+</button>
                    <button disabled={state===1} onClick={decrement}>-</button>
                </div>*/}
                
                <div className={style.containerButton}>
                 <button onClick={()=> onClose(id)} className={style.button}>X</button>
             </div>

            
        </div>
		)
}


export default Card;

{/*<div className={style.containerButton}>
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
*/}