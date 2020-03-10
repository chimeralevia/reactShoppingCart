import React from 'react'

export default function TotalCounter(props) {
    const totalSum = props.items.reduce((a,v) => a + v.quantity * v.product.priceInCents,0)
    
    return (
        <div class="container">
            {`Total Price:$${totalSum/100}`}
        </div>
    )
}
