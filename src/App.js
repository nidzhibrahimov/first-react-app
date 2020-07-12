import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProfileNavbar from './components/ProfileNavbar';
import NameBar from './components/NameBar';
import Wall from './components/Wall';
import Footer from './components/Footer';
import './App.css';

const App = () => {return(

  <div className='app-wrapper'>

      <Header />
      <div className="main">
        <Navigation />
        <div className='content'>
          <ProfileNavbar />
          <NameBar />
          <Wall />
        </div>
      </div>
      <Footer />

    </div>

)}

export default App;
