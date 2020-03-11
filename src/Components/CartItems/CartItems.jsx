import React from "react";
import CartItemSingle from "./CartItemSingle";
import TotalCounter from "./TotalCounter";

export default function CartItems(props) {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {props.items.map((x,i) => {
            return <CartItemSingle key={i} product={x.product} quantity={x.quantity}/>
        })}
      </div>
      <TotalCounter items={props.items}/>
    </div>
  );
}
