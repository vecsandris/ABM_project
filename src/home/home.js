import React, { Component } from "react";
import Article from "./article/article";
import Header from "./header/header";
import Footer from "./footer/footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Article />
        <Footer />
      </>
    );
  }
}
