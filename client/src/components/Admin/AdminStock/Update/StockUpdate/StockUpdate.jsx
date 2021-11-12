import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteItem} from "../../../../../redux/actions/actions"

const StockUpdate = () => {
    const dispatch = useDispatch();
    const { item } = useSelector(state => state.admin);
    const id = "un id";

    const [edit, setEdit] = useState(false);
    const [object, setObject] = useState({
        name: "name",
        precio: "precio",
        descripcion: "descripcion",
        imagen: "imagen",
        categoria: "categoria"
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
                        <span>{object.name}</span>
                        <span>{object.precio}</span>
                        <span>{object.description}</span>
                        <span>{object.imagen}</span>
                        <span>{object.categoria}</span>
                    </div>
                    : <div>
                        <input name="name" value={object.name} placeholder="Nombre..." onChange={handleChange} />
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