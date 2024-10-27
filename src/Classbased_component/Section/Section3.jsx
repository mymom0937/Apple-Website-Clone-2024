import React, { Component } from "react";
import Sectionprops from "./FirstThreeSectionProps";

class Section3 extends Component {
  render() {
    return (
      <>
        <Sectionprops
          wrapper={"third-hightlight-wrapper"}
          titlewraper={"title-wraper bold"}
          title={"iPhone 11 Pro"}
          description
          price
          discriptionwrraper={"description-wrapper"}
          priceclass={"price-wrapper"}
          price1={"From $24.95/mo. or $599 with trade‑in."}
        />
      </>
    );
  }
}

export default Section3;
