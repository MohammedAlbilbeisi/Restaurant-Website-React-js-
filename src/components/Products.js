
import React from 'react';
import Productbox from './Productbox';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';



function Products() {
    return(
    <div id='products'>

    <h1>Choose & Enjoy</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit  Facilis naxine venia voluptate, quis.</p>
   <div className="a-container" >
       <Productbox image={image1} title="Luger Burger"></Productbox>
       <Productbox image={image2} title="Le Pigeon Burger"></Productbox>
       <Productbox image={image1} title="Luger Burger"></Productbox>

       
       </div>    
      </div>      


   

)}
export default Products;