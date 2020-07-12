import React from 'react';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import style from './Main.module.css';


const Main = () => {return(

	<div className={style.main}>
		<Navigation />
		<Content />
	</div>

	)}

export default Main;