import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return(

	<header className={style.header}>
		<div className={style.logo}>
			<img src='https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Discover_Network-256.png' alt='Logo'></img>
		</div>

		<div className={style.search}>
			<input value='Search...'></input>
		</div>
		
		<div className={style.logout}>
		<img src='https://costablancalive.es/wp-content/uploads/2017/11/accessories-for-businesswomen-1050x700.jpg' alt='Avatar'></img>
		<p>Elizabeth J. &raquo;</p>
		</div>
	</header>


	)}


export default Header;