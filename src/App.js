import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, Products, Basket } from "./pages";

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
    
    this.setState({
      basket: basket,
      itemsCount: itemsCount
    })
  }

  handleRemoveFromBasket(item) {
    let itemsCount = this.state.itemsCount;
    const basket = this.state.basket.filter(function(i) {
      return i !== item
    });
    itemsCount -= item.qty;
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

const allProducts = [
  {
    "_id": 1,
    "name": "TOMATES (KG)",
    "category": "Hortalizas",
    "image": "/images/tomato.jpg",
    "price": 4,
    "rating": 4.5,
    "numReviews": 10,
    "available": true,
    "maxOrder": 10,
    "qty": 0
  },
  {
    "_id": 2,
    "name": "LECHUGA (UD)",
    "category": "Hortalizas",
    "image": "/images/lettuce.jpg",
    "price": 2,
    "rating": 5,
    "numReviews": 8,
    "available": false,
    "maxOrder": 8,
    "qty": 0
  },
  {
    "_id": 3,
    "name": "MIEL (400 GR)",
    "category": "Procesados",
    "image": "/images/honey.jpg",
    "price": 6.5,
    "rating": 5,
    "numReviews": 15,
    "available": true,
    "maxOrder": 5,
    "qty": 0
  },
  {
    "_id": 4,
    "name": "TOMATES (KG)",
    "category": "Hortalizas",
    "image": "/images/tomato.jpg",
    "price": 4,
    "rating": 4.5,
    "numReviews": 10,
    "available": false,
    "maxOrder": 10,
    "qty": 0
  },
  {
    "_id": 5,
    "name": "LECHUGA (UD)",
    "category": "Hortalizas",
    "image": "/images/lettuce.jpg",
    "price": 2,
    "rating": 5,
    "numReviews": 8,
    "available": true,
    "maxOrder": 12,
    "qty": 0
  },
  {
    "_id": 6,
    "name": "MIEL (400 GR)",
    "category": "Procesados",
    "image": "/images/honey.jpg",
    "price": 6.5,
    "rating": 5,
    "numReviews": 15,
    "available": true,
    "maxOrder": 7,
    "qty": 0
  }
]
