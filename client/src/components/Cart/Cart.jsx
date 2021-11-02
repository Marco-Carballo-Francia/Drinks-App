import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/actions/actions.js';
import style from './Cart.module.css';
import Card from "./Card.js";


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart);
    console.log(cart)
    
    
    function totalCart(array) {
        let total=0;
        for(var i=0; i<array.length; i++){
            console.log(array[i].precio)
            let neto= price(array[i].precio)
            total= total + neto
        }
        return total;
    }

    const delBebida = (id) => {
        cart = cart.filter((product) => product.id !== id)
        alert('Tu producto fue eliminado del carrito 👍')
        
    }
    function price(precio){
        let total;
        let splitprice= precio.split(",");
        if(splitprice[0].length <=4 ){
            if(splitprice[0][0]==="$"){
               let neto=splitprice[0].split("$");
                total=parseInt(neto[1])
            }else{
            total= parseInt(splitprice[0])
                }
        }else{
            let numberFix= splitprice[0].split(".").join("");
            let finishNumber= numberFix.split("$")[1]
            total= parseInt(finishNumber)
        }
      return total;  
    }

    
    useEffect(() => {
        dispatch(getCart());

    }, [dispatch]);

    

    
    return (
        <div className={style.container}>
            <div className={style.cards}>
        {   cart.length?
            cart.map(p => {
                return(
            <Card
            id={p._id}
            name={p.name}
            image={p.imagen}
            rating={p.rating}
            precio={price(p.precio)}

            />
        )}): <p></p> }
         </div>
         <div className={style.containerTotal}> 
            <div className={style.preciFinal}>
                <h1 className={style.total}>TOTAL: $ {totalCart(cart) }</h1>
            </div>
            <div>
                <button className={style.btn}>PAGAR</button>
            </div>
         </div>
         </div>  
    );
};

export default Cart;

{/*<Card
            id={p.id}
            name={p.name}
            image={p.imagen}
            rating={p.rating}
            precio={p.precio} 
            /> */}