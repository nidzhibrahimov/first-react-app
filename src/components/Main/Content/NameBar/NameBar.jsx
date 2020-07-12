import React from 'react';
import style from './NameBar.module.css';


const NameBar = () => {return(
	<div className={style.content}>

		<div className={style.avatar}>
			<img src='https://costablancalive.es/wp-content/uploads/2017/11/accessories-for-businesswomen-1050x700.jpg' alt='Avatar'></img>
		</div>

		<div className={style.name}>
			<p>Elizabeth Joel</p>
		</div>

	</div>

	)}

export default NameBar;