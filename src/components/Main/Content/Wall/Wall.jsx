import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import style from './Wall.module.css';

const Wall = () => {return(
	<div className ={style.allWall}>
		<NewPost />
		<Post message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ducimus, nobis!' like='56' posted='07.07.2020'/>
		<Post message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi nam sunt, laboriosam repellat nobis esse sed numquam iure. Quo officia soluta amet distinctio voluptate! Earum illum quasi facilis dolor?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quidem totam sed ratione, eius, quasi odio?' like='28' posted='29.03.2020' />
	</div>
	)}

export default Wall;