import React from 'react';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import style from './Main.module.css';
import {Route} from 'react-router-dom';

const Main = () => {return(

		<div className={style.main}>
			<Navigation />
			<div className={style.all}>
				<Route path='/profile' component={Content} />
				<Route path='/dialogs' component={Dialogs} />
				<Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} />
			</div>
		</div>
	)}

export default Main;