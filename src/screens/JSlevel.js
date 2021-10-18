import React from 'react';
//components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import JSLevel from '../components/JSLevels/JSLevel01';

const JSLevelScreen = () =>{
    return(
        <div>
            <NavBar/>
            <div className='container'>
                <JSLevel/>
            </div>
            <Footer/>
        </div>
    )
}

export default JSLevelScreen;