import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

const App = () => {return(

	<BrowserRouter>

	  <div className='app-wrapper'>
	    <Header />
	    <Main />
	    <Footer />
	  </div>
	  
	</BrowserRouter>

)}

export default App;
