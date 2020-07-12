import React from 'react';
import style from './Post.module.css'

	const Post = (props) => {return(

		<div className={style.wall}>

			<div className={style.item}>
				<div className={style.line}>
					<div className={style.avatar}>
						<img src='https://costablancalive.es/wp-content/uploads/2017/11/accessories-for-businesswomen-1050x700.jpg' alt='Avatar'></img>
					</div>
					<div>{props.message}</div>
				</div>

				<div className={style.line}>
					<div className={style.date}>Posted: {props.posted}</div>
					<div className={style.like}>Like: {props.like}</div>
				</div>
			</div>

		</div>
)}

	export default Post;