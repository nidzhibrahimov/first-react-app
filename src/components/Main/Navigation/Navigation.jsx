import React from 'react';
import style from './Navigation.module.css';


const Navigation = () => {return(


	<nav className={style.nav}>
	<div className={style.item}>Profile</div>
	<div className={style.item}>Messeges</div>
	<div className={style.item}>News</div>
	<div className={style.item}>Music</div>
	<div className={style.item}>Settings</div>
	</nav>


	)}



export default Navigation;