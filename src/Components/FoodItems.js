import React from 'react'
//import SpringRoll from '../Images/SpringRoll.jpg'
import {Link} from 'react-router-dom';

export default function FoodItems(props) {
  return (
    <>
        {/* <Link to="/Home"> */}
          <div className='FoodItem'>
              {props.image && <img src = {props.image} alt=""/>}
              <div className='FoodInfo'>
                <h1 className='FoodName'>{props.name}</h1>
                <div className='FoodPriceInfo'>
                  <h2 className='FoodPrice'>Price: ${props.price}</h2>
                  {props.discount && <img src = {props.discount} alt="" className='DiscountImg'/>}
                </div>
                <p className='FoodDescription'><strong>Description: </strong>{props.description}</p>
                <p className='FoodIngredients'><strong>Ingredients: </strong>{props.ingredients}</p>
                <p className ='TotalCount'>Total Number of Items = {props.totalItems}</p>
                <p className ='TotalAmount'>Grand Total Amount = ${Math.floor(props.totalAmount)}</p>
                <div className='FoodCount'>
                  <button className = "QuantityButton" onClick={props.increment}><i class = "fa fa-plus"/></button>
                  <p>{props.itemcount}</p>
                  <button className = "QuantityButton" onClick={props.decrement}><i class = "fa fa-minus"/></button>
                  {props.AddToCart ? <button className='CartButton' onClick={props.cart}><i class = "fa fa-shopping-cart"/>  
                  Remove from Cart</button> : <button className='CartButton' onClick={props.cart}><i class = "fa fa-shopping-cart"/>  
                  Add to Cart</button>}
                </div>
              </div> 
          </div>
        {/* </Link> */}
    </>
  )
}
