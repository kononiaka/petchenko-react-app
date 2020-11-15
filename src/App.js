import React, { Component } from "react";
import "./App.css";
import "./fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/main/Main";
import Image from "./components/Image/Image";
import Contacts from "./components/contacts/Contacts";
import NotFound from "./components/notFound/notFound";
import Collection from "./components/Collection/Collection";
import BlockImage from "./components/BlockImage/BlockImage";

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
    ],
    collection: {
      beauty_fashion: [
        {
          id: "viktoria_g",
          name: "Viktoria_G",
          src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6318.jpg"),
          poster: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6318.jpg"),
          eventDate: "No Event Date",
          quantity: 0,
          photos: [
            {
              id: "viktoria_g_01",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6146.jpg"),
            },
            {
              id: "viktoria_g_02",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6160-3.jpg"),
            },
            {
              id: "viktoria_g_03",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6194.jpg"),
            },
            {
              id: "viktoria_g_04",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6204.jpg"),
            },
            {
              id: "viktoria_g_05",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6206.jpg"),
            },
            {
              id: "viktoria_g_06",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6286.jpg"),
            },
            {
              id: "viktoria_g_07",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6302.jpg"),
            },
          ],
          status: "Published",
        },
      ],
    },
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
    console.log("click");
    this.setState((state) => ({
      openImageId: id,
      srcOpen: src,
      imageOpen: true,
    }));
  };

  blockClick = () => {
    this.state.collection.beauty_fashion[0].photos.map((photo) =>
      console.log(photo.src)
    );
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/collection/:id"
            render={() => (
              <BlockImage
                imageClick={this.openImage}
                photos={this.state.collection.beauty_fashion[0].photos}
                poster={this.state.collection.beauty_fashion.map(
                  (photo) => photo.poster
                )}
              ></BlockImage>
            )}
          ></Route>
          <Route
            path="/collection"
            render={() => (
              <Collection
                blocks={this.state.collection.beauty_fashion}
                blockClick={this.blockClick}
              />
            )}
          ></Route>

          <Route
            path={["/collection/:id/images/:id", "/images/:id"]}
            render={() => <Image src={this.state.srcOpen} />}
          ></Route>

          <Route path="/contact" component={Contacts}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route
            path="/"
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
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </>
    );
  }
}

export default App;
