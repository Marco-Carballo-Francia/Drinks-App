import React from 'react';
import Table from 'react-bootstrap/Table'
import style from './Styles/Shopping.module.css';

function Shopping() {
    // const { user } = useSelector((state) => state.user);

    // console.log(user)
    return (
        <div className={style.ctnTable}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>N de orden</th>
                        <th>Fecha</th>
                        <th>Productos</th>
                        <th>Estado</th>
                        <th>Direccion </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <th>- </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Shopping;