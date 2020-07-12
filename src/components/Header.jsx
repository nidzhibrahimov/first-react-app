import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return(

	<header className={style.header}>
		<div className={style.logo}>
			<img src='https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Discover_Network-256.png' alt='Logo'></img>
		</div>
		
		<div className={style.logout}>
		<img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-256.png' alt='Avatar'></img>
		<p>Alice &raquo;</p>
		</div>
	</header>


	)}


export default Header;