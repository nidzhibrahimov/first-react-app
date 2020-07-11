import React from 'react';
import '.././App.css';

const Header = () => {
	return(

	<header className='header'>
		<div className='header-logo'>
			<img src='https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Discover_Network-256.png' alt='Logo'></img>
		</div>
		
		<div className='header-logout'><img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-256.png' alt='Avatar'></img>
		<p className='text'>Alice &raquo;</p>
		</div>
	</header>


	)}


export default Header;