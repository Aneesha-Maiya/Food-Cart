import React from 'react'
import FoodItem1 from '../Images/fooditem5.jpg';
import {Link} from 'react-router-dom'

export default function Landing() {
  return (
    <>
        <div className='MainContent'>
        <h1 className='Hero-Text'>Enjoy Our Delicious Meal</h1>
        <p className='Sub-Hero-Text'>Find all your recipes, tried and tested for you in our test
        kitchen.Keep it easy with these simple but delicious recipes from make-ahead lunches to 
        midweek meals</p>
        <Link to="/Item"><button>Get Started  <i class = "fa fa-cutlery"/></button></Link>
        </div>  
        <img src={FoodItem1} alt='' className='Main-Img'/>
    </>
  )
}
