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
  <div class="col">
  <Link to='/Quiz' className='router-card'>
    <div class="card h-100" >
      <img src="https://borjaarandavaquero.com/wp-content/uploads/2019/12/que-es-html.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Quiz de HTML 101</h5>
        <p class="card-text"></p>
      </div>
    </div>
    </Link>
  </div>
  <div class="col">
  <Link to='/Quiz' className='router-card'>
    <div class="card h-100">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJu4QeV6BKW9YoimiJ4j_uFwXyooSsx9jFw&usqp=CAU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Quiz de CSS 101</h5>
        <p class="card-text"></p>
      </div>
    </div>
    </Link>
  </div>
</div>

    )
}

export default Cards;
