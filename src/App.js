import React, { Component } from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartItems from "./Components/CartItems/CartItems";
import AddItems from "./Components/CartItems/AddItem";
import "./App.css";

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
      cartItemsList.find(i => Number(i.product.id) === Number(newProduct.id))
    );
    if (productIndexToUpdate >= 0) {
      cartItemsList[productIndexToUpdate].quantity += Number(quantity);
    } else {
      let nextFreeIndex = cartItemsList.reduce((a, v) =>
        a.id >= v.id ? a.id : v.id
      );
      cartItemsList.push({
        id: nextFreeIndex,
        product: newProduct,
        quantity: Number(quantity)
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
        <div id="content" className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/">
              <CartItems items={cartItemsList} />
            </Route>
            <Route path="/additem">
              <AddItems addHandler={this.addProduct} />
            </Route>
          </Switch>
        </Router>
        </div>
        <Footer date={2018} />
      </div>
    );
  }
}

