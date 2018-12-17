import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor() {
    super();
    this.state = {
      sideBarClass: "zero",
      images: [
        "https://s3.us-east-2.amazonaws.com/hackreact/Danny.png",
        "https://s3.us-east-2.amazonaws.com/hackreact/James.png",
        "https://s3.us-east-2.amazonaws.com/hackreact/Tyler.png",
        "https://s3.us-east-2.amazonaws.com/hackreact/Image+from+iOS+(4).jpg"
      ]
    };
  }
  toLogin = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };

  trackScroll = () => {
    let scrollHeight = document.querySelector(".exploreOuter").scrollHeight;
    let scroll = Math.floor((window.scrollY / scrollHeight) * 100);

    //Change class based on scroll position.
    if (scroll < 10) {
      this.setState({ sideBarClass: "zero" });
    } else if (scroll >= 10 && scroll < 20) {
      this.setState({ sideBarClass: "twenty" });
    } else if (scroll >= 20 && scroll < 25) {
      this.setState({ sideBarClass: "forty" });
    } else if (scroll >= 25 && scroll < 30) {
      this.setState({ sideBarClass: "sixty" });
    } else if (scroll >= 30 && scroll < 35) {
      this.setState({ sideBarClass: "eighty" });
    } else if (scroll >= 35) {
      this.setState({ sideBarClass: "zero" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.trackScroll);
  }

  render() {
    const displayPictures = this.state.images.map((value, index) => {
      return (
        <div className="imageContainer">
          <img className="devpic" src={value} alt="Developer Photo" />
        </div>
      );
    });
    return (
      <div className="exploreOuter" id="outer">
        <div className={this.state.sideBarClass} />
        <div className="exploreContainer">
          <div className="exploreSubOne">{displayPictures}</div>
        </div>
        <div className="floaterContainer">
          <div className="floaterOne" />
          <div className="textBar" />
          <p>
            React is designed to create a custom user experience with JavaScript
            and HTML. Whether you prefer a more theoretical or a practical
            approach, we hope to provide you with the best tools to help
            accelerate your growth as a React developer!
          </p>
          <div className="floaterTwo" />
        </div>
        <div className="exploreContainer" id="bottomDiv">
          <div className="loginContainer">
            <button className="loginButton" onClick={() => this.toLogin()}>
              Login / Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
