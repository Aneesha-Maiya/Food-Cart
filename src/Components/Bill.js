import React from 'react'

export default function Bill(props) {
  const item = props.itemstate;
  return (
    <>
        <div className="Bill-Content">
            <center>
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
                        return(
                                <tr>
                                    <td>{items.name}</td>
                                    <td>{items.quantity}</td>
                                    <td>{items.discountPercentage*100 + "%"}</td>
                                    <td>{"$"+items.price}</td>
                                    <td>{"$"+Math.floor(items.discountPercentage*items.price*items.quantity)}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </center>
        </div>
    </>
  )
}
