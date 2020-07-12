import React from 'react';
import style from './Wall.module.css';

const Wall = () => {return(
	<div className ={style.allWall}>
		<div className={style.new}>
			<div>Wall</div>
			<div>New post</div>
			<textarea className={style.input}></textarea>
		</div>

		<div>
			<div className={style.wall}>
				<div className={style.item}>Post 1</div>
				<div className={style.item}>Post 1</div>
				<div className={style.item}>Post 1</div>
			</div>
		</div>

	</div>
	)}

export default Wall;