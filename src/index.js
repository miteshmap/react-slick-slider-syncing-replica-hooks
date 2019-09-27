import React, { useState } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import "./styles.css";

const CustomElement = props => {
  return (
    <div
      className="custom-slide"
      onMouseEnter={props.mouseover.bind(this)}
      onMouseOut={props.mouseout.bind(this)}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

function ImageSliderNew(props) {
  const [maintxt, setMaintxt] = useState(1);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    arrows: true,
    touchThreshold: 1000
  };
  var setTimeoutConst = null;

  function changeimg(event) {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    clearTimeout(setTimeoutConst);
    setMaintxt(event.target.innerText);
    // this.mainbox.current.value = 1;
  }

  function resetimg(event) {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    setTimeoutConst = setTimeout(function() {
      setMaintxt(1);
    }, 1000);
    // this.mainbox.current.value = 1;
  }

  return (
    <div className="container">
      <div className="main-box">{maintxt}</div>
      <Slider {...settings} className="search-lightSlider">
        <CustomElement value="1" mouseover={changeimg} mouseout={resetimg} />
        <CustomElement value="2" mouseover={changeimg} mouseout={resetimg} />
        <CustomElement value="3" mouseover={changeimg} mouseout={resetimg} />
        <CustomElement value="4" mouseover={changeimg} mouseout={resetimg} />
      </Slider>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <ImageSliderNew />
      <ImageSliderNew />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
