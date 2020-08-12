import React from 'react';
import style from './Dialogs.module.css';

	const Dialogs = (props) => {return(

		<div className={style.all}>
			<h2>Dialogs</h2>
			<div className={style.dialogs}>
				<div className={style.items}>
					<div className={style.dialog + ' ' + style.active}>Alexander</div>
					<div className={style.dialog}>Dimich</div>
					<div className={style.dialog}>Andrey</div>
					<div className={style.dialog}>Katya</div>
					<div className={style.dialog}>Misha</div>
					<div className={style.dialog}>Annastasia</div>
					<div className={style.dialog}>Egor</div>
				</div>
				<div className={style.messages}>
					<div className={style.message}>HI</div>
					<div className={style.message}>HI Howe are you? </div>
					<div className={style.message}>HI Howe are you? FUcking </div>
					<div className={style.message}>HI Howe are you? FUcking Down</div>
				</div>
			</div>
		</div>
		)}

export default Dialogs;