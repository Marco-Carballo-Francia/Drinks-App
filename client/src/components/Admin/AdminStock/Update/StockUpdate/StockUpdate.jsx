import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useConfirmAlert } from 'material-confirm-alert';

const StockUpdate = () => {
    const confirm = useConfirmAlert();
    const dispatch = useDispatch();
    const { item } = useSelector(state => state.admin);
    const id = item.id;

    const [edit, setEdit] = useState(false);
    const [object, setObject] = useState({
        name: item.nombre,
        precio: item.precio,
        descripcion: item.descripcion,
        imagen: item.imagen,
        categoria: item.categoria
    })

    const handleDelete = async () => {
        const result = await confirm("Eliminar item definitivamente?")
        if (result) {
            dispatch(deleteItem(id))
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
                        <span>{item.name}</span>
                        <span>{item.precio}</span>
                        <span>{item.description}</span>
                        <span>{item.imagen}</span>
                        <span>{item.categoria}</span>
                    </div>
                    : <div>
                        <input name="name" value={object.name} onChange={handleChange} />
                        <input name="precio" value={object.precio} onChange={handleChange} />
                        <input name="descripcion" value={object.descripcion} onChange={handleChange} />
                        <input name="imagen" value={object.imagen} onChange={handleChange} />
                        <input name="categoria" value={object.categoria} onChange={handleChange} />
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