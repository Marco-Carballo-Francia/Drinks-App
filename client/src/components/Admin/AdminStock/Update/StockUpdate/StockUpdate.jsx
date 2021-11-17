import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteItem} from "../../../../../redux/actions/actions";
import style from "./StockUpdate.module.css";
import Loading from "../../../../Loading/Loading";

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
                    ?   <div>
                            {
                            !item 
                                ?   <h3>Seleccioná un item de la lista.</h3>
                                :   <div>
                                        <span><strong>Producto: </strong>{item.nombre}</span><br />
                                        <span><strong>Precio: </strong>{item.precio}</span><br />
                                        <span><strong>Descripcion: </strong>{item.descripcion}</span><br />
                                        <img src={item.imagen} alt="imagen del producto" />
                                    </div>
                            }
                        </div>
                    :   <div>
                            <input name="nombre" value={object.nombre} placeholder="Nombre..." onChange={handleChange} />
                            <input name="precio" value={object.precio} placeholder="Precio..." onChange={handleChange} />
                            <input name="descripcion" value={object.descripcion} placeholder="Descripcion..." onChange={handleChange} />
                            <input name="imagen" value={object.imagen} placeholder="Imagen..." onChange={handleChange} />
                            <div>
                                <span>Unidades en stock: (acá iría el item.qty)</span>
                                <input type="number" min="0" />
                            </div>
                        </div>
            }
            <div>
                {   
                    !edit
                        ? <button onClick={handleDelete}>ELIMINAR</button>
                        : <button onClick={handleSave}>GUARDAR</button>
                }
                { 
                    !edit 
                        ? <button disabled={!item} onClick={handleEdit}>EDITAR</button> 
                        : <button onClick={() => setEdit(false)}>CANCELAR</button>
                }
            </div>
        </div>
    )
}

export default StockUpdate;