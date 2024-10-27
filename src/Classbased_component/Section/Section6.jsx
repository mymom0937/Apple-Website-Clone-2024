import arcade from "../../commonResource/images/icons/arcade.png";
import React, { Component } from "react";
import Section46props from "./LastThreeSectionProps";
class Section6 extends Component {
  render() {
    return (
      <>
        <Section46props
          heghlightwrapper="sixth-heghlight-wrapper"
          toplogo
          TopLogowrapper
          logowrapper="logo-wrapper"
          logoimg={arcade}
          descriptionwraper={"description-wraper white"}
          description="  Agent 8 is a small hero on a big mission."
          linksswrapper="links-wrapper"
          leftlink="Play now"
          leftlink1="Learn about Apple Arcade"
          titlewraper
          titlewraperclass="title-wraper"
          titlediscription="Apple Card Monthly Installments"
          rightdiscription
          rightdiscriptionwrapper="Pay for your next iPhone over time, interest-free with AppleCard."
          linkkswrapper="links-wrapper"
          link1="Learn more"
          link2
          linkswrapper="Apply now"
        />
      </>
    );
  }
}
export default Section6;
