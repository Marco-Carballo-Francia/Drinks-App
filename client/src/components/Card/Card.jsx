import React, { useState } from 'react';
import style from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from '../../Iconos/image-default-Card.jpeg';
import Rating from '../Rating/Rating';
import { addCart } from "../../redux/actions/actions.js";
import Modal from 'react-bootstrap/Modal'

const Card = (prod) => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const cart = useSelector((state) => state.cart.cart);
    const user = useSelector(state => state.user.user);
    const id = user?._id;
    let p = prod.prod
    const dispatch = useDispatch();
    // const [clicked, setClicked] = useState(false)

    function onClick() {
        let item = p._id;
        let itemCart = {
            item: item,
            qtyCart: 1
        }
        if (!user) {
            handleShow1();
            setTimeout(handleClose1, 3000);
        }else{
            handleShow2();
            setTimeout(handleClose2, 1000);    
            dispatch(addCart(itemCart, id));
        }
        console.log(itemCart);
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
                <button onClick={() => onClick()} className={style.btn}>Agregar al carrito</button>
            </div>
            <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Necesitas estar registrado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Registrate para poder entrar al carrito!</Modal.Body>
                </Modal>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton1>
                        <Modal.Title>Agregaste al carrito correctamente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Podes seguir agregando productos!</Modal.Body>
                </Modal>
        </div>
    );
};

export default Card;