import React from 'react';
import Cards from '../Cards/Cards';
import Modal from '../Modal/Modal';
import CarouselCombo from "../CarouselCombo/CarouselCombo"
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector(state => state.functionality);

    return (
        <div>
            <CarouselCombo />
            {
                !modal && <Modal />   
            }
            <Cards />
        </div>
    )
};

export default Home;