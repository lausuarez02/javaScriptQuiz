//vendors
import React from 'react';
//components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Quiz from '../components/quiz';
import Modal from '../components/modal';
//css
import './HomeScreen.css';


function HomeScreen(){
    return(
        <div>
        <NavBar/>
        <div className='container'>
            <Quiz/>
        </div>
        <Footer/>
        </div>
    )
}

export default HomeScreen;
