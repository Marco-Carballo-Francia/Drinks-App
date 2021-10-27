import React from 'react';
import Cards from '../Cards/Cards.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Categories from "../Categories/Categories";


const Home = () => {
    return (
        <div>
            <NavBar />
            <Categories />
            <Cards />
        </div>
    )

};

export default Home;