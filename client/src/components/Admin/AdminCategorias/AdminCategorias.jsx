import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, createCategory, updateCategory } from "../../../redux/actions/actions";
import style from "./AdminCategorias.module.css";
import Modal from 'react-bootstrap/Modal';
import { BsCheck2Square } from "react-icons/bs";

const AdminCategorias = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [inputE, setInputE] = useState('');
    const [inputC, setInputC] = useState('');
    // const [id, setId] = useState("");
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.products)
    const mappedCategories = categories.map(e => e.nombre)

    const [error, setError] = useState("")

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    // const handleEdit = (e) => {
    //     console.log('e.target.value', e.target.value)
    //     setInputE(e.target.value);  
    // } 

    const handleCreate = (e) => {
        if (mappedCategories.includes(e.target.value)) {
            setError("Esa categoría ya existe.")
        }
        else {
            setError("");
            setInputC(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategory(inputC))
        setInputC('');
        handleShow();
        setTimeout(handleClose, 3000);
    }

    // const handleSelect = (e) => {
    //     console.log('e.target.value', e.target.value)
    //     console.log('e.target.label', e.target.label)
    //     setId(e.target.value)
    //     setInputE(e.target.label)
    // }

    // const handleGuardar = () => {
    //     dispatch(updateCategory({ id, nombre: inputE }));
    //     alert("Guardado!") // <--- modal
    // }


    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className={style.modalHead} closeButton1>
                    <h1 className={style.titleModal}>Felicitaciones!<BsCheck2Square className={style.iconModal} /></h1>
                </Modal.Header>
                <p className={style.textModal}>Se creo la categoria correctamente</p>
            </Modal>

            {/* <h5>Categorías existentes:</h5> */}
            {/* <div className={styles.categorias}>        
                <select onChange={handleSelect}>
                    <option selected value="">seleccione categoría</option>
                    {
                        categories?.map(x => {
                        return (
                            <option label={x.nombre} value={x._id} >{x.nombre}</option>
                            )
                        })
                    }
                </select>
                <input type="text" value={inputE} onChange={handleEdit}/>
                <button disabled={!inputE} onClick={handleGuardar}>GUARDAR</button>
            </div> */}
            <h5 className={style.title}>Nueva Categoría:</h5>
            <form onSubmit={handleSubmit}>
                <input className={style.input} type="text" value={inputC} name='nombre' onChange={handleCreate} />
                {error ? error : null}
                <button className={style.btn} disabled={!inputC || error} type="submit">CREAR CATEGORÍA</button>
            </form>
        </div>

    )
}

export default AdminCategorias;