import React from 'react'
import FoodItems from './FoodItems';

export default function Cart(props) {
  return (
    <>
        {props.AddToCart && <FoodItems
             name = {props.name}
             price = {props.price}
             description = {props.description}
             image = {props.image}
             ingredients = {props.ingredients}
             itemcount = {props.itemcount} 
             discount = {props.discount}
             discountPercentage = {props.discountPercentage}
             totalItems = {props.totalItems}
             totalAmount = {props.totalAmount}
             AddToCart = {props.AddToCart}
             increment = {props.increment}
             decrement = {props.decrement}
             cart = {props.cart}
        />}
        <h1>{props.AddToCart}</h1>
    </>
  )
}

