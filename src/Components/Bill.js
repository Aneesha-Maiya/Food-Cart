import React from 'react'

export default function Bill(props) {
  const item = props.itemstate;
  return (
    <>
        <div className="Bill-Content">
            {
                item.map((items,index)=>{
                    return(
                        <center>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Discount</th>
                                    <th>Price</th>
                                    <th>Discount Amount</th>
                                </tr>
                                <tr>
                                    <td>{items.name}</td>
                                    <td>{items.quantity}</td>
                                    <td>{items.discountPercentage}</td>
                                    <td>{items.price}</td>
                                    <td>{items.discountPercentage*items.price*items.quantity}</td>
                                </tr>
                            </table>
                        </center>
                    )
                })
            }
        </div>
    </>
  )
}
