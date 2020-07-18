import React from 'react';
import Navigation from './Navigation/Navigation';
import Dialogs from './Dialogs/Dialogs'
import style from './Main.module.css';


const Main = () => {return(

	<div className={style.main}>
		<Navigation />
		<div className={style.all}>
			<Dialogs />
		</div>
	</div>

	)}

export default Main;