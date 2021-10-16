import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';


function Cards(){

    return(
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
  <Link to='/Quiz' className='router-card'>
    <div class="card h-100">
      <img src="https://miro.medium.com/max/800/0*aH8YUI7nqAZ6b-V_.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Quiz de javaScript 101</h5>
        <p class="card-text"></p>
      </div>
    </div>
    </Link>
  </div>
</div>
    )
}

export default Cards;
