import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createHashHistory } from 'history'
import "./Header.css";

export const history = createHashHistory()

class Header extends Component {

  
  render() {
    return (
      
    <nav id="navbar" className="navbar navbar-dark bg-primary">
    <a id="navbar-brand" className="navbar-brand" href="/">
      Shopping Cart
    </a>
    <Button
      variant="contained"
      color="primary"
      className="nav-button"
      startIcon={<ShoppingCartIcon />}
      onClick={()=>history.push('./')}
    >
      Items
    </Button>
    <Button
      variant="contained"
      color="primary"
      className="nav-button"
      startIcon={<AddIcon />}
      onClick={()=>history.push('./additem')}
    >
      Add
    </Button>
    
  </nav>

    )
  }
}

export default Header;

