import React from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import style from './CarouselCombo.module.css';
import { Link } from 'react-router-dom'
import {setCategory, setPage, getProducts, unmountGet} from "../../redux/actions/actions"

const CarouselCombo = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(unmountGet());
		dispatch(setCategory(e.target.value))
		dispatch(setPage(1));
		dispatch(getProducts({ category: e.target.value }));
    }
    return (

        <Carousel className={style.ctnSup}>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className={style.ctntxt} >
                    <h1>Sabias que?</h1>
                    <p className={style.txt}>Tenemos muchos combos para que disfrutes justo a amigos</p>
                    <Link to="/category/combos" ><button value="combos" onClick={handleClick} className={style.btn}>Entrar</button> </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption className={style.ctntxt}>
                    <h1>Vinos tintos, blancos, rosados…?</h1>
                    <p className={style.txt}>Seleccione entre una gran variedad de vinos, de mucha calidad y algunos vinos que solo se elaboran en solo una parte del planeta</p>
                   <Link to="/category/vinos"> <button  value="vinos" onClick={handleClick} className={style.btn}>Entrar</button> </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption className={style.ctntxt}>
                    <h1>Amante del Whisky? </h1>
                    <p className={style.txt}>Nunca lo has probado y te quieres dar un capricho? No te preocupes… aquí podrás encontrar ese que tanto añoras.  </p>
                    <Link to="/category/whisky"><button value="whisky" onClick={handleClick} className={style.btn}>Entrar</button> </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
};

export default CarouselCombo;