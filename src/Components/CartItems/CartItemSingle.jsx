import React from 'react'

export default function CartItemSingle(props) {

    const formatCentsToDollar = (priceInCents) => {
        return `$${priceInCents/100}`;
    }

    const {product,quantity} = props;
    return (
        <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{product.name}</div>
          <div className="col-md-2">{formatCentsToDollar(product.priceInCents)}</div>
          <div className="col-md-2">{quantity}</div>
        </div>
      </div>
    )
}
