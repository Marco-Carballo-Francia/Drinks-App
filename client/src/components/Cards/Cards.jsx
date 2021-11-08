import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, unmountGet, addCart } from '../../redux/actions/actions';
import Card from '../Card/Card';
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import style from './Cards.module.css';

const Cards = () => {
    const dispatch = useDispatch();
    const { products } = useSelector( state => state.products);
    const { category } = useSelector( state => state.products)

    useEffect(() => {
        dispatch(unmountGet());
        dispatch(getProducts({category}));
    }, [dispatch]);

    // console.log('products', products);
    // console.log('getProducts', getProducts())
    return (

        <div>
            {
            !products.length 
                ? ( <Loading /> )
                : (
                    <div>
                        <div className={style.Cards}>{
                                products && products.map(prod => <Card key={prod.id} prod={prod} />)
                            }
                        </div>
                        <Pagination />
                    </div>
                )
            }
        </div>
    );
};

export default Cards;