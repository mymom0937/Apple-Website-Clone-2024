import React, { Component } from "react";
import Sectionprops from "./FirstThreeSectionProps";
class Section1 extends Component {
  render() {
    return (
      <>
        <Sectionprops
          wrapper={"first-hightlight-wrapper"}
          alertmessage={"new-alert"}
          titlewraper={"title-wraper bold black"}
          title={"iPad Pro"}
          ipodcaption={"ipod-caption row"}
        />
      </>
    );
  }
}

export default Section1;
