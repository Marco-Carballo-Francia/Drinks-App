import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteItem} from "../../../../../redux/actions/actions";

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

    return (
        <div>
            {
                 !edit 
                    ? <div>
                        <span>{item.nombre}</span>
                        <span>{item.precio}</span>
                        <span>{item.descripcion}</span>
                        <span>{item.imagen}</span>
                    </div>
                    :  <div>
                        <input name="nombre" value={object.nombre} placeholder="Nombre..." onChange={handleChange} />
                        <input name="precio" value={object.precio} placeholder="Precio..." onChange={handleChange} />
                        <input name="descripcion" value={object.descripcion} placeholder="Descripcion..." onChange={handleChange} />
                        <input name="imagen" value={object.imagen} placeholder="Imagen..." onChange={handleChange} />
                    </div>
            }
            <div>
                <button onClick={handleDelete}>DELETE</button>
                { 
                    !edit 
                        ? <button disabled={!item.nombre} onClick={handleEdit}>EDIT</button> 
                        : <button onClick={() => setEdit(false)}>CANCEL</button>
                }
            </div>
        </div>
    )
}

export default StockUpdate;