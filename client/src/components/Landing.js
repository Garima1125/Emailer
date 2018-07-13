import React from 'react';
import { Slider, Slide } from 'react-materialize';


const Landing = () => {
  return (
    <div>
    <Slider>
  <Slide
    src="./2.jpg" 
    title="Few steps to your own Email Surveys">
    Embed survey questions in email for higher response rates
  </Slide>
  <Slide
    src="./tab.jpg"
    title="Better Services"
    placement="right">
    Our embedded survey questions work with every email client.  
  </Slide>
  <Slide
    src="./wework.jpg"
    title="Extensive Reporting"
    placement="left">
    Check your survey ratings real-time.
  </Slide>
</Slider>
  <div className="container">
      <i className="material-icons">equalizer</i><h5 className="result-head">Get your results in just seconds.</h5>
      <img className="results" src="./circle.gif"/> 
      </div>
    </div>
  );
};

export default Landing;
