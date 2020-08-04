import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import "./fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Exhibition from "./components/exhibition/Exhibition";
import Store from "./components/store/Store.jsx";
import Contacts from "./components/contacts/Contacts";
import NotFound from "./components/notFound/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/main" component={Main}></Route>
          <Route path="/gallery" component={Main}></Route>
          <Route path="/contact" component={Contacts}></Route>
          <Route path="/store" component={Store}></Route>
          <Route path="/exhibition" component={Exhibition}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
