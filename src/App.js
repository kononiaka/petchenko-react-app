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
          poster: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6328.jpg"),
          eventDate: "No Event Date",
          status: "Published",
          photos: [
            {
              id: "viktoria_g_01",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6146.jpg"),
            },
            {
              id: "viktoria_g_06",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6286.jpg"),
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
              id: "viktoria_g_07",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6302.jpg"),
            },
            {
              id: "viktoria_g_08",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6307.jpg"),
            },
            {
              id: "viktoria_g_09",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6318.jpg"),
            },
            {
              id: "viktoria_g_10",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6328.jpg"),
            },

            {
              id: "viktoria_g_12",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6421.jpg"),
            },

            {
              id: "viktoria_g_14",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6446.jpg"),
            },
            {
              id: "viktoria_g_",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6399.jpg"),
            },
            {
              id: "viktoria_g_15",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6506.jpg"),
            },
            {
              id: "viktoria_g_13",
              src: require("./img/Collection/Fashion & Beauty/Viktoria_G/DSC_6426.jpg"),
            },
          ],
        },
        {
          id: "zelen",
          name: "Zelen",
          src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A4983.jpg"),
          poster: require("./img/Collection/Fashion & Beauty/Zelen/JB1A5003.jpg"),
          eventDate: "No Event Date",
          status: "Published",
          photos: [
            {
              id: "zelen_01",
              src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A4983.jpg"),
            },
            {
              id: "zelen_02",
              src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A5003.jpg"),
            },
            {
              id: "zelen_03",
              src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A5010.jpg"),
            },
            {
              id: "zelen_04",
              src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A5031с.jpg"),
            },
            {
              id: "zelen_05",
              src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A5035c.jpg"),
            },
            {
              id: "zelen_06",
              src: require("./img/Collection/Fashion & Beauty/Zelen/JB1A5138с.jpg"),
            },
          ],
        },
        {
          id: "vladya",
          name: "VladaYa",
          src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0485.jpg"),
          poster: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0906.jpg"),
          eventDate: "No Event Date",
          status: "Published",
          photos: [
            {
              id: "vladaya_01",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0485.jpg"),
            },
            {
              id: "vladaya_02",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0582.jpg"),
            },
            {
              id: "vladaya_03",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0672.jpg"),
            },
            {
              id: "vladaya_04",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0790.jpg"),
            },
            {
              id: "vladaya_05",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0869.jpg"),
            },
            {
              id: "vladaya_07",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0921.jpg"),
            },
            {
              id: "vladaya_08",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0975.jpg"),
            },
            {
              id: "vladaya_09",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B1036.jpg"),
            },
            {
              id: "vladaya_10",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B1038.jpg"),
            },
            {
              id: "vladaya_06",
              src: require("./img/Collection/Fashion & Beauty/VladaYa/HM7B0906.jpg"),
            },
          ],
        },
        {
          id: "ANNkara",
          name: "ANNkara",
          src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2650.jpg"),
          poster: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2870.jpg"),
          eventDate: "No Event Date",
          status: "Published",
          photos: [
            {
              id: "ANNkara_01",
              src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2650.jpg"),
            },
            {
              id: "ANNkara_02",
              src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2687.jpg"),
            },
            {
              id: "ANNkara_03",
              src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2722.jpg"),
            },
            {
              id: "ANNkara_04",
              src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2818.jpg"),
            },
            {
              id: "ANNkara_05",
              src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B2870.jpg"),
            },
            {
              id: "ANNkara_06",
              src: require("./img/Collection/Fashion & Beauty/ANNkara/HM7B3060.jpg"),
            },
          ],
        },
        {
          id: "BEVZ_underwear",
          name: "BEVZ_underwear",
          src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0002.jpg"),
          poster: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0587.jpg"),
          eventDate: "No Event Date",
          status: "Published",
          photos: [
            {
              id: "BEVZ_underwear_02",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0026.jpg"),
            },
            {
              id: "BEVZ_underwear_01",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0002.jpg"),
            },
            {
              id: "BEVZ_underwear_03",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0106.jpg"),
            },
            {
              id: "BEVZ_underwear_04",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0180.jpg"),
            },
            {
              id: "BEVZ_underwear_05",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0237.jpg"),
            },
            {
              id: "BEVZ_underwear_06",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0337.jpg"),
            },
            {
              id: "BEVZ_underwear_07",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0350.jpg"),
            },
            {
              id: "BEVZ_underwear_08",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0463.jpg"),
            },
            {
              id: "BEVZ_underwear_09",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0587.jpg"),
            },
            {
              id: "BEVZ_underwear_11",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0638.jpg"),
            },
            {
              id: "BEVZ_underwear_12",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0659.jpg"),
            },
            {
              id: "BEVZ_underwear_10",
              src: require("./img/Collection/Fashion & Beauty/BEVZ_underwear/DSC_0544.jpg"),
            },
          ],
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
    this.setState((state) => ({
      openImageId: id,
      srcOpen: src,
      imageOpen: true,
    }));
  };

  activeElement;

  blockClick = (id) => {
    this.activeElement = this.state.collection.beauty_fashion.find(
      (element) => element.id === id
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
                menuOpen={this.state.menuOpen}
                toggleMenu={this.toggleMenu}
                photos={this.activeElement.photos}
                name={this.activeElement.name}
                poster={this.activeElement.poster}
              ></BlockImage>
            )}
          ></Route>
          <Route
            path="/collection"
            render={() => (
              <Collection
                blocks={this.state.collection.beauty_fashion}
                blockClick={this.blockClick}
                menuOpen={this.state.menuOpen}
                toggleMenu={this.toggleMenu}
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
