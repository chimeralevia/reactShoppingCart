import React from 'react'

export default function CartItemSingle(props) {

    const formatCentsToDollar = (priceInCents) => {
        return `$${priceInCents/100}`;
    }

    const {product,quantity} = props;
    return (
        <div class="list-group-item">
        <div class="row">
          <div class="col-md-8">{product.name}</div>
          <div class="col-md-2">{formatCentsToDollar(product.priceInCents)}</div>
          <div class="col-md-2">{quantity}</div>
        </div>
      </div>
    )
}
