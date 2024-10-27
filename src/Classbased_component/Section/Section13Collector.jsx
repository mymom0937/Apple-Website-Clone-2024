import React, { Component } from 'react';
import Section1 from './Section1';
//import Sectionprops from './Section13props';
import Section2 from './Section2';
import Section3 from './Section3';

class Section13 extends Component {
  render() {
    return (
      <>
       <Section1/> 
        <Section2 />
        <Section3 />
      </>
    );
  }
}

export default Section13;
