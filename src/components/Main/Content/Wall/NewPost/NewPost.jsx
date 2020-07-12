import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {return(

	<div className={style.new}>
		<div>Wall</div>
		<div>New post</div>
		<textarea className={style.input}></textarea>
		<button>Add</button>
	</div>



	)}

export default NewPost;