import { Component } from "react";
import Sectionprops from "./FirstThreeSectionProps";

class Section2 extends Component {
  render() {
    return (
      <>
        <Sectionprops
          wrapper={"second-hightlight-wrapper"}
          alertmessage
          titlewraper={"title-wraper bold black"}
          title={"MacBook Air"}
          description
          price
          discriptionwrraper={"description-wrapper black"}
          priceclass={"price-wrapper grey"}
          price1={"From $999."}
        />
      </>
    );
  }
}
export default Section2;
