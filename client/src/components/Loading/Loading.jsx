import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import style from './Loading.module.css';


const Loading = () => {
	return (
		<div className={style.sniper}>
			<Spinner animation="border" role="status">
	  			<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loading;


