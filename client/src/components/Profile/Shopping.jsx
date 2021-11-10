import React,{ useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import style from './Styles/Shopping.module.css';
import {getUserTickets} from "../../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";

function Shopping() {
     const { user, tickets } = useSelector((state) => state.user);
     const id = user?.id;
     const dispatch= useDispatch();
     console.log("tickets", tickets);

     useEffect(() => {
    dispatch(getUserTickets(id));
  }, [dispatch]);

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
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tickets.length?
                    tickets.map( x => {
                        return(
                    <tr>
                        <td>{x._id}</td>
                        <td>{x.fecha}</td>
                        <td>{x.items.map(i => <p>{i.item.name}</p>)}</td>
                        <td>{x.state}</td>
                        <th>{x.direccion}</th>
                        <th>$ {x.precioTotal}</th>

                         </tr>         
                )}): null

                }
                </tbody>
            </Table>
        </div>
    )
}

export default Shopping;