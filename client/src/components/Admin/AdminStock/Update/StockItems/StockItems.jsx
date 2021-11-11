import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//  import { getAdminItems } from "../../redux/actions/actions";
/*  import Loading from "../components/Loading/Loading"; */ 

const StockItems = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.admin);

    // useEffect(() => {
        // dispatch(getAdminItems())
    // }, [dispatch])

    return (
        <div>
            mapeo de items
            {
                /* items 
                    ? ( <div>{items.map(x => <span>{x.name}</span>)}</div> )
                    : ( <Loading /> ) */
            }
        </div>
    )
}

export default StockItems;