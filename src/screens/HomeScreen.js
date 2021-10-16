//vendors
import React from 'react';
//components
import Cards from '../components/card';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
//css
import './HomeScreen.css';
//router
import {Link} from 'react-router-dom'

function HomeScreen(){
    return(
        <div>
        <NavBar/>
        <div className='container'>
          <Cards/>
        </div>
        <Footer/>
        </div>
    )
}

export default HomeScreen;
