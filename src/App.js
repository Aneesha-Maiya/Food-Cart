import React from 'react'
import Navbar from './Components/Navbar'
import FoodItems from './Components/FoodItems';
import Cart from './Components/Cart';
import SpringRoll from './Images/SpringRoll.jpg';
import Salmon from './Images/Salmon.jpg';
import Spaghetti from './Images/Spaghetti.jpg';
import HawaiianPizza from './Images/HawaiianPizza.jpg';
import TenOff from './Images/TenOff.jpeg';
import FiveOff from './Images/FiveOff.jpeg';
import './App.css';
import { useState,useEffect} from 'react'
import {Route,Routes} from 'react-router-dom';
import Landing from './Components/Landing';
import Bill from './Components/Bill';

export default function App() {
  const foodItemsArray = [
    {
      id: 1,
      quantity:2,
      name : "Spring Roll With Vegetables",
      price : 30.00,
      description : "Spring Rolls are popular appetizer from the Chinese Cuisine and is an Asian Favorite. They are filled with lightly seasoned crunchy vegetables and sometimes even meat is added.",
      ingredients: "Ginger garlic paste, Green chillies, Bell Peppers, Cheddar Cheese Carrots, Green Peas",
      image : SpringRoll,
      isAddedToCart: false,
      discount: TenOff,
      discountPercentage: 0.10,
    },
    {
      id: 2,
      quantity:3,
      name : "Salmon Stir Fry",
      price : 35.00,
      description : "With fresh salmon, vegetables and a homemade teriyaki sauce, this salmon stir fry recipe is a healthy weeknight meal.",
      image: Salmon,
      ingredients: "Salmon,Teriyaki sauce and Vegetables like peppers, carrots and green beans.",
      isAddedToCart: false,
      discountPercentage: 0.00,
    },
    {
      id: 3,
      quantity:1,
      name : "Vegetable Spaghetti with Bacon",
      price : 27.45,
      description : "Quick and easy vegetable spaghetti that tastes so good, you won’t even realize it’s loaded with nutritious veggies",
      image: Spaghetti,
      ingredients: "Pasta,Vegetables like roasted red peppers, leafy greens, peas, corn, and cabbage.Onion, garlic, and tomato paste,tomatoes,Herbs and spices.",
      isAddedToCart: false,
      discount: FiveOff,
      discountPercentage: 0.05,
    },
    {
      id: 4,
      quantity: 2,
      name : "Hawaiian BBQ Chicken Pizza",
      price : 15.50,
      description : "Pizza crust is layered with smokey bbq sauce, chicken pieces, creamy mozzarella, sweet pineapple, and flavorful red onion and cilantro.",
      image: HawaiianPizza,
      ingredients: "Pizza dough,Chicken breasts,Olive oil,Barbecue sauce,Bacon,Mozzarella,Fresh pineapple,Red onion,Cilantro,Garlic and Black pepper",
      isAddedToCart: false,
      discountPercentage: 0.00,
    },
  ];
  const [item,setItem] = useState(foodItemsArray);
  const [totalItemCount,setTotalItemCount] =useState(8);
  const [totalAmount,setTotalAmount] = useState(223.45);
  const [totalCartAmt,setTotalCartAmt] = useState(0);
  const [totalDiscountAmt,setTotalDiscountAmt] = useState(0);
  useEffect(() => {

  },[item]);
  const incrementCount = (itemindex) =>{
    const newItems = [...item]
    newItems[itemindex].quantity++;
    setItem(newItems);
    calculateTotal();
    calculateTotalAmount();
};
  const decrementCount = (itemindex)=>{
    const newItems = [...item]
    newItems[itemindex].quantity--;
    setItem(newItems);
    calculateTotal();
    calculateTotalAmount();
  }
  const calculateTotal = () =>{
    var total = 0
    item.map((items)=>{
      return total = total + items.quantity
    })
    setTotalItemCount(total)
  }
  const checkCart = (itemindex) =>{
    const newItems = [...item]
    newItems[itemindex].isAddedToCart = !newItems[itemindex].isAddedToCart
    if(newItems[itemindex].isAddedToCart){
      alert("Items Successfully Added to cart");
      cartItemAmount();
      DiscountAmount();
    }
    else
    alert("Items Successfully removed from cart")
    setItem(newItems)
  }
  const calculateTotalAmount = ()=>{
    var totalAmount = 0
    item.map((items)=>{
      return totalAmount = totalAmount + (items.quantity)*(items.price)*(1-items.discountPercentage)
    })
    setTotalAmount(totalAmount)
  }
  const cartItemAmount = () =>{
    var totalCartAmount = 0;
    item.map((items)=>{
      if(items.isAddedToCart){
        return totalCartAmount = totalCartAmount + (items.quantity)*(items.price)*(1-items.discountPercentage);
      }
      else
      return totalCartAmount
    })
    setTotalCartAmt(totalCartAmount)
  }
  const DiscountAmount = () =>{
    var totalDiscountAmount = 0;
    item.map((items)=>{
      if(items.isAddedToCart && items.discountPercentage>0.0){
        return totalDiscountAmount = totalDiscountAmount + (items.quantity)*(items.price)*(items.discountPercentage);
      }
      else
      return totalDiscountAmount
    })
    setTotalDiscountAmt(totalDiscountAmount)
  }
  return (
    <> 
        <Navbar/>
         <Routes>
              <Route path='/Cart' element = {
                  <>
                      <h1 className='CartTitle'>Welcome to cart section</h1>
                      {item.map((item,index)=>(
                      <Cart
                          name = {item.name}
                          price = {item.price}
                          description = {item.description}
                          image = {item.image}
                          ingredients = {item.ingredients}
                          itemcount = {item.quantity} 
                          discount = {item.discount}
                          discountPercentage = {item.discountPercentage}
                          increment = {() => incrementCount(index)}
                          decrement = {() => decrementCount(index)}
                          totalItems = {totalItemCount}
                          totalItemsCount = {()=> {calculateTotal()}}
                          totalAmount = {totalAmount}
                          totalAmountCount = {()=>{calculateTotalAmount()}}
                          cart = {() => {checkCart(index)}}
                          AddToCart = {item.isAddedToCart}
                      />))}
                  </>
              }/>
              <Route path='/Item' element = {item.map((item,index)=>(
        <>
          <FoodItems
                  name = {item.name}
                  price = {item.price}
                  description = {item.description}
                  image = {item.image}
                  ingredients = {item.ingredients}
                  itemcount = {item.quantity}
                  discount = {item.discount} 
                  discountPercentage = {item.discountPercentage}
                  increment = {() => incrementCount(index)}
                  decrement = {() => decrementCount(index)}
                  totalItems = {totalItemCount}
                  totalItemsCount = {()=> {calculateTotal()}}
                  totalAmount = {totalAmount}
                  totalAmountCount = {()=>{calculateTotalAmount()}}
                  cart = {() => {checkCart(index)}}
                  AddToCart = {item.isAddedToCart}
          />
       </>
      ))} />
      <Route path='/Food-Cart' element ={<Landing/>}/>
      <Route path='/' element ={<Landing/>}/>
      <Route path='/Bill' 
      element = {
        <>
        <h1>Bill Info</h1>
        <p>Bill items</p>
        <Bill
          itemstate = {item}
          totalCartAmount = {totalCartAmt}
          totalDiscountAmount = {totalDiscountAmt}
        />
        </>
      }/>
  </Routes>
    </>
  )
}
