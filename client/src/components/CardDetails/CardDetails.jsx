import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails, unmountGet, addCart } from '../../redux/actions/actions';
import { useState } from 'react';
import style from './CardDetails.module.css';
import Rating from '../Rating/Rating';
import Review from '../Review/Review';
import Loading from "../Loading/Loading";
import Modal from 'react-bootstrap/Modal';
import { BsCheck2Square } from "react-icons/bs";


function CardDetails(props) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.product);
    const user = useSelector(state => state.user.user);
    let userId = user?._id;

    const { id } = props.match.params;

    useEffect(() => {
        dispatch(getProductsDetails(id));
        return () => {
            dispatch(unmountGet());
        };
    }, [dispatch, id]);

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("sin dependecias")
    })

    function onClick(payload) {
        let item = id;
        let itemCart = {
            item: item,
            qtyCart: 1
        }
        if (!user) {
            handleShow1();
            setTimeout(handleClose1, 3000);
        } else {
            handleShow2();
            setTimeout(handleClose2, 1000);
            dispatch(addCart(itemCart, userId));
        }
    }

    // const handleAddToCart = (product) => {
    //     dispatch(addCart(product))
    // }

    return (
        <div className={style.ctnSuperior}>
            {
                product.nombre
                    ?
                    (
                        <div className={style.ctnDetalles}>
                            <div>
                                <img className={style.img} src={product.imagen ? product.imagen : `${product}`} alt="img" />
                            </div>
                            <div className={style.ctnCompra}>
                                <h1 className={style.titulo}> {product.nombre} </h1>

                                <div className={style.Ctnprecio}>
                                    <h2 className={style.precio}> {product.precio} </h2>
                                    {/* <h2 className={style.p}>  {product.categorias?.charAt(0).toUpperCase() + product.categorias?.slice(1)} </h2> */}
                                    <h2 className={style.p}><Rating rating={product.rating} numReviews={5} /></h2>
                                </div>
                                <div className={style.ctnDescripcion}>
                                    <h1 className={style.tituloDescripcion}> Decripción de la bebida  </h1>
                                    <h3 className={style.texDescripcion}>{product.descripcion}</h3>

                                </div>

                                <div>
                                    {   
                                        !product.stock 
                                            ? <p>Sin stock</p>
                                            : <button onClick={() => onClick(product)} className={style.comprar}>Agregar al carrito</button>
                                       
                                    }
                                </div>
                                <div>
                                    <button className={style.añadir}>Agregar a favoritos</button>
                                </div>
                            </div>

                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <h1 className={style.titleRegister}>ACCESO DENEGADO</h1>
                                </Modal.Header>
                                <p className={style.nameModalRegister}> Debes iniciar sessión o registarte para agregar al carrito !</p>
                            </Modal>

                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header className={style.modalHead} closeButton1>
                                    <h1 className={style.titleModal}>Agregaste al carrito <BsCheck2Square className={style.iconModal} /></h1>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className={style.cntModal}>
                                        <img className={style.imagenModal} src={product.imagen} alt="img no encontrada" />
                                        <div>
                                            <p className={style.nameModal}>{product.nombre}</p>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )
                    :
                    (<Loading />)
            }

            <div className={style.review}>
                <Review id={id} />
            </div>
        </div>
    );
}

export default CardDetails;