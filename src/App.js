import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, Products, Basket } from "./pages";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: allProducts,
      basket: [1]
    }
  }

  handleAddToCart(event) {
    console.log('Added to cart')
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Nav 
            basketQty={ this.state.basket.length }
          />
          <Switch>
            <Route path="/" exact component={ () => 
              <Home /> 
            } />

            <Route path="/products" exact component={ () => 
              <Products 
                products={ this.state.products } 
                onClick={ () => this.handleAddToCart() } 
              /> 
            } />

            <Route path="/basket" exact component={ () => 
              <Basket 
                basketQty={ this.state.basket.length }
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
    "maxOrder": 10
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
    "maxOrder": 8
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
    "maxOrder": 5
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
    "maxOrder": 10
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
    "maxOrder": 12
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
    "maxOrder": 7
  }
]
