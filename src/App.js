import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, Products, Basket } from "./pages";
import { allProducts } from "./data"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: allProducts,
      basket: [],
      itemsCount: 0
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromBasket = this.handleRemoveFromBasket.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
  }

  handleAddToCart(item) {
    let basket = this.state.basket;
    let itemsCount = this.state.itemsCount;
    if (basket.indexOf(item) >= 0) {
      basket[basket.indexOf(item)].qty += 1
      itemsCount += 1;
    } else {
      item.qty += 1;
      basket = basket.concat(item);
      itemsCount += 1;
    }
    
    this.updateItemsCountAndBasket(basket, itemsCount);
  }

  handleRemoveFromBasket(item) {
    let itemsCount = this.state.itemsCount;
    const basket = this.state.basket.filter(function(i) {
      return i !== item
    });
    itemsCount -= item.qty;
    
    this.updateItemsCountAndBasket(basket, itemsCount);
  }

  increaseQty(item) {
    let basket = this.state.basket;
    let itemsCount = this.state.itemsCount;

    basket[basket.indexOf(item)].qty += 1
    itemsCount += 1;

    this.updateItemsCountAndBasket(basket, itemsCount);
  }

  decreaseQty(item) {
    let basket = this.state.basket;
    let itemsCount = this.state.itemsCount;

    if (basket[basket.indexOf(item)].qty === 1) {
      return this.handleRemoveFromBasket(item)
    } else {
      basket[basket.indexOf(item)].qty -= 1;
      itemsCount -= 1;
    }

    this.updateItemsCountAndBasket(basket, itemsCount);
  }

  updateItemsCountAndBasket(basket, itemsCount) {
    this.setState({
      basket: basket,
      itemsCount: itemsCount
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Nav 
            basketQty={ this.state.itemsCount }
          />
          <Switch>
            <Route path="/" exact component={ () => 
              <Home /> 
            } />

            <Route path="/products" exact component={ () => 
              <Products 
                products={ this.state.products } 
                onClick={ this.handleAddToCart } 
              /> 
            } />

            <Route path="/basket" exact component={ () => 
              <Basket 
                basket={ this.state.basket }
                itemsCount={ this.state.itemsCount }
                onClick={ this.handleRemoveFromBasket }
                increaseQty={ this.increaseQty }
                decreaseQty={ this.decreaseQty }
              /> 
            } />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;