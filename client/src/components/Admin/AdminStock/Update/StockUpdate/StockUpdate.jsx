import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteItem} from "../../../../../redux/actions/actions";

const StockUpdate = () => {
    const dispatch = useDispatch();
    const { item } = useSelector(state => state.admin);
    const id =  item.id;

    const [edit, setEdit] = useState(false);
    const [object, setObject] = useState({
        nombre: item?.nombre,
        precio: item?.precio,
        descripcion: item?.descripcion,
        imagen: item?.imagen,
        categoria:"categoria"
    })

    const handleDelete = () => {
        let answer = window.confirm("Borrar item?");
        if (answer) {
            dispatch(deleteItem(id))
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

    return (
        <div>
            {
                 !edit 
                    ? <div>
                        <span>{object.nombre}</span>
                        <span>{object.precio}</span>
                        <span>{object.descripcion}</span>
                        <span>{object.imagen}</span>
                        <span>{object.categoria}</span>
                    </div>
                    :  <div>
                        <input name="name" value={object.nombre} placeholder="Nombre..." onChange={handleChange} />
                        <input name="precio" value={object.precio} placeholder="Precio..." onChange={handleChange} />
                        <input name="descripcion" value={object.descripcion} placeholder="Descripcion..." onChange={handleChange} />
                        <input name="imagen" value={object.imagen} placeholder="Imagen..." onChange={handleChange} />
                        <input name="categoria" value={object.categoria} placeholder="Categoria..." onChange={handleChange} />
                    </div>
            }
            <div>
                <button onClick={handleDelete}>DELETE</button>
                { 
                    !edit 
                        ? <button onClick={() => setEdit(true)}>EDIT</button> 
                        : <button onClick={() => setEdit(false)}>CANCEL</button>
                }
            </div>
        </div>
    )
}

export default StockUpdate;