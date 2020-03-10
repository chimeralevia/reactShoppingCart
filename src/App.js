import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartItems from "./Components/CartItems/CartItems";
import AddItems from "./Components/CartItems/AddItem";
import TotalCounter from "./Components/CartItems/TotalCounter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItemsList: [
        {
          id: 1,
          product: {
            id: 40,
            name: "Mediocre Iron Watch",
            priceInCents: 399
          },
          quantity: 1
        },
        {
          id: 2,
          product: {
            id: 41,
            name: "Heavy Duty Concrete Plate",
            priceInCents: 499
          },
          quantity: 2
        },
        {
          id: 3,
          product: {
            id: 42,
            name: "Intelligent Paper Knife",
            priceInCents: 1999
          },
          quantity: 1
        }
      ]
    };
  }

  addProduct = (newProduct, quantity) => {
    const { cartItemsList } = this.state;

    let productIndexToUpdate = cartItemsList.indexOf(
      cartItemsList.find(i => i.product.id == newProduct.id)
    );
    if (productIndexToUpdate >= 0) {
      cartItemsList[productIndexToUpdate].quantity += quantity;
    } else {
      let nextFreeIndex = cartItemsList.reduce((a, v) =>
        a.id >= v.id ? a.id : v.id
      );
      cartItemsList.push({
        id: nextFreeIndex,
        product: newProduct,
        quantity: quantity
      });
    }

    this.setState({
      cartItemsList: cartItemsList
    });
  };

  render() {
    const { cartItemsList } = this.state;
    return (
      <div className="App">
        <Header />
        <CartItems items={cartItemsList} />
        <TotalCounter items={cartItemsList}/>
        <AddItems addHandler={this.addProduct} /> 
        <Footer date={2018} />
      </div>
    );
  }
}
