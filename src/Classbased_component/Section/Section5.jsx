import watch from "../../commonResource/images/icons/watch-series5-logo.png";
import appletv from "../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../commonResource/images/home/banker.png";
import React, { Component } from "react";
import Section46props from "./LastThreeSectionProps";
class Section5 extends Component {
  render() {
    return (
      <>
        <Section46props
          heghlightwrapper="fifth-heghlight-wrapper"
          toplogo
          TopLogowrapper
          logowrapper="logo-wrapper"
          logoimg={appletv}
          descriptionwraper
          tvshow
          watch
          rightlogo
          rightdiscription
          rightdiscriptionwrapper={`With the Always-On Retina display. ${(
            <br />
          )}You’ve never seen a watch like this.`}
          linkkswrapper="links-wrapper"
          link1="Learn more"
          link2
          linkswrapper="Buy"
        />
      </>
    );
  }
}
export default Section5;
