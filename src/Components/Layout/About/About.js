import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor() {
    super();
    this.state = {
      sideBarClass: "zero"
    };
  }
  toLogin = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };

  trackScroll = () => {
    console.log(window.scrollY);
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
    return (
      <div className="exploreOuter" id="outer">
        <div className={this.state.sideBarClass} />
        <div className="exploreContainer">
          <div className="exploreSubOne" />
        </div>
        <div className="floaterContainer">
          {/* <iframe
            src="https://giphy.com/embed/l3vR16pONsV8cKkWk"
            className="gif"
          /> */}
          <div className="floaterOne" />
          <div className="textBar" />
          <p>
            React, designed to create a custom user experience with JavaScript
            and HTML as the source. People come to React from different
            backgrounds and with different learning styles. Whether you prefer a
            more theoretical or a practical approach, we hope to provide you
            with the best tools to help accelerate your growth as a React
            developer.
          </p>
          <div className="floaterTwo" />
        </div>
        <div className="exploreContainer">
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
