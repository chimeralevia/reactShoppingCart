import React, { Component } from "react";

const productList = [
  { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
  { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
  { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
  { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
  { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
  { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
  { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
  { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
  { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 }
];

export default class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      quantity: 0
    };
  }

  updateQuantity = event => {
    this.setState({ quantity: event.target.value });
  };

  updateSelectedProduct = event => {
    let pr = productList.find((p)=>p.id==event.target.value);

    this.setState({ product: pr, isSelected: true });
  };

  submitForm = () => {
    const { product, quantity } = this.state;
    this.props.addHandler(product, quantity);
  };

  render() {
    return (
      <div className="container">
          <div class="form-group">
            <label for="amountInput">Quantity</label>

            <input
              type="number"
              onChange={this.updateQuantity}
              class="form-control"
              id="amountInput"
              placeholder="amount"
            ></input>
          </div>

          <div class="form-group">
            <label for="productsSelection">Products</label>
            <select
              class="form-control"
              onChange={this.updateSelectedProduct}
              id="productsSelection"
            >
              {productList.map((p, i) => (
                <option key={i} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <button onClick={this.submitForm} class="btn btn-primary my-1">
            Submit
          </button>
      </div>
    );
  }
}
