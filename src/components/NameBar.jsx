import React from 'react';
import style from './NameBar.module.css';


const NameBar = () => {return(
	<div className={style.content}>

		<div className={style.avatar}>
			<img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-256.png' alt='Avatar'></img>
		</div>

		<div className={style.name}>
			<p>Alice Ibrahimova</p>
		</div>

	</div>

	)}

export default NameBar;