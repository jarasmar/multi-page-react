import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Home, About } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={ () => <Home /> } />
          <Route path="/about" exact component={ () => <About /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
