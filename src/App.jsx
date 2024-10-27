import React, { Component } from "react";
import Footer from "./Classbased_component/Footer/Footer";
import Alert from "./Classbased_component/Section/Alert";
import Section13 from "./Classbased_component/Section/Section13Collector";
import Section46 from "./Classbased_component/Section/Section46Collector";
import Header from "./Classbased_component/Header/Header";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Alert />
        <Section13 />
        <Section46 />
        <Footer />
      </>
    );
  }
}

export default App;
