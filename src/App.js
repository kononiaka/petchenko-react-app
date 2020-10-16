import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import "./fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/main/Main";
import Image from "./components/Image/Image.jsx";
import Contacts from "./components/contacts/Contacts";
import NotFound from "./components/notFound/notFound";

class App extends Component {
  state = {
    images: [
      { id: 1, src: require("./img/JB1A7112.jpg") },
      { id: 2, src: require("./img/DSC_5887.jpg") },
      { id: 4, src: require("./img/HM7B1003.jpg") },
      { id: 3, src: require("./img/DSC_6399.jpg") },
      { id: 5, src: require("./img/HM7B1036.jpg") },
      { id: 6, src: require("./img/HM7B2818.jpg") },
      { id: 7, src: require("./img/HM7B3988.jpg") },
      { id: 8, src: require("./img/HM7B5559.jpg") },
      { id: 9, src: require("./img/JB1A5035с.jpg") },
      { id: 10, src: require("./img/JB1A6147.jpg") },
      { id: 12, src: require("./img/JB1A6984.jpg") },
      { id: 11, src: require("./img/JB1A6883_1.jpg") },
    ],
    openImageId: null,
    menuOpen: false,
    imageOpen: false,
    srcOpen: null,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  openImage = (id, src = this.state.srcOpen) => {
    this.setState((state) => ({
      openImageId: id,
      srcOpen: src,
      imageOpen: true,
    }));
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/main"
            render={() => (
              <Main
                openImageId={this.state.openImageId}
                menuOpen={this.state.menuOpen}
                imageOpen={this.state.imageOpen}
                images={this.state.images}
                openImage={this.openImage}
                toggleMenu={this.toggleMenu}
              />
            )}
          ></Route>
          <Route
            path="/gallery"
            render={() => (
              <Main
                openImageId={this.state.openImageId}
                menuOpen={this.state.menuOpen}
                imageOpen={this.state.imageOpen}
                images={this.state.images}
                openImage={this.openImage}
                toggleMenu={this.toggleMenu}
              />
            )}
          ></Route>
          <Route
            path="/images/:id"
            render={() => <Image src={this.state.srcOpen} />}
          ></Route>
          <Route path="/contact" component={Contacts}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </>
    );
  }
}

export default App;
