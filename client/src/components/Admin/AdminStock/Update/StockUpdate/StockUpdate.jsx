import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteItem} from "../../../../../redux/actions/actions";
import style from "./StockUpdate.module.css";

const StockUpdate = () => {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const { item } = useSelector(state => state.admin);

    const [object, setObject] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        imagen: "",
        categorias: "",
    })

    const handleDelete = () => {
        let answer = window.confirm(`Usted está por borrar el siguiente producto: ${item.nombre}`);
        if (answer) {
            dispatch(deleteItem(item.id))
        }
        else {
            console.log("shkere")
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setObject({
            ...object,
            [name]: value
        })
    }

    const handleEdit = () => {
        setObject({
            nombre: item.nombre,
            precio: item.precio,
            descripcion: item.descripcion,
            imagen: item.imagen,
            categorias: "categoria",
        })
        setEdit(true);
    }

    const handleSave = () => {
        // acá va el dispatch que debería hacer un put en el item con la info actualizada
    }

    return (
        <div className={style.container}>
            {
                 !edit 
                    ? <div>
                        <p>Nombre: {item.nombre}</p>
                        <p>Precio:{item.precio}</p>
                        <p>Descripcion{item.descripcion}</p>
                        <p>Imagen{item.imagen}</p>
                    </div>
                    :  <div>
                        <input className={style.input} name="nombre" value={object.nombre} placeholder="Nombre..." onChange={handleChange} />
                        <input className={style.input} name="precio" value={object.precio} placeholder="Precio..." onChange={handleChange} />
                        <textarea className={style.textarea} name="descripcion" value={object.descripcion} placeholder="Descripcion..." onChange={handleChange} />
                        <input className={style.input} name="imagen" value={object.imagen} placeholder="Imagen..." onChange={handleChange} />
                    </div>
            }
            <div  className={style.ctnBtnsModal}>
                {   
                    !edit
                        ? <button className={style.btnModal} onClick={handleDelete}>ELIMINAR</button>
                        : <button className={style.btnModal} onClick={handleSave}>GUARDAR</button>
                }
                { 
                    !edit 
                        ? <button className={style.btnModal} disabled={!item} onClick={handleEdit}>EDITAR</button> 
                        : <button className={style.btnModal} onClick={() => setEdit(false)}>CANCELAR</button>
                }
            </div>
        </div>
    )
}

export default StockUpdate;