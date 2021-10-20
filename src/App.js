import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={ () => <Home /> } />
          <Route path="/about" exact component={ () => <About /> } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
