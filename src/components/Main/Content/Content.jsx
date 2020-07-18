import React from 'react';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import NameBar from './NameBar/NameBar';
import Wall from './Wall/Wall';
import style from './Content.module.css';

const Content = () => {return(

		<div>
			<ProfileNavbar />
			<NameBar />
			<Wall />
		</div>

	)}

export default Content;