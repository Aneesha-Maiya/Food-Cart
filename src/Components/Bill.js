import React from 'react'

export default function Bill(props) {
  const item = props.itemstate;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let currentDate =  `${day}-${month}-${year}`;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let currentTime = `${hours}-${minutes}-${seconds}`
  return (
    <>
        <div className="Bill-Content">
            <center>
                <div className='Bill-Area'>
                <p className='Bill-Date-Time'>Date: {currentDate}</p>
                <p className='Bill-Date-Time'>Time: {currentTime}</p>
                <table>
                    <tr>
                        <th>Names</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Price</th>
                        <th>Discount Amount</th>                   
                    </tr>            
                    {
                        item.map((items,index)=>{
                            if(items.isAddedToCart){
                                return(
                                    <tr>
                                        <td>{items.name}</td>
                                        <td>{items.quantity}</td>
                                        <td>{items.discountPercentage*100 + "%"}</td>
                                        <td>{"$"+items.price}</td>
                                        <td>{"$"+Math.floor(items.discountPercentage*items.price*items.quantity)}</td>
                                    </tr>
                                )
                            }
                            else
                            return null;
                        })
                    }
                    <tr>
                        <td colSpan="3">Total:</td>
                        <td>${Math.floor(props.totalCartAmount + props.totalDiscountAmount)}</td>
                        <td>${Math.floor(props.totalDiscountAmount)}</td>
                    </tr>
                    <tr><td colSpan="5" id='GrandTotal'>Grand Total: ${Math.floor(props.totalCartAmount)}</td></tr>
                </table>
                </div>
            </center>
        </div>
    </>
  )
}
