import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getUser } from "../../../../ducks/userReducer";
import { connect } from "react-redux";
import "./Sandbox.css";

import { IframeContainer, ContainerDiv } from "./SandboxSC";

class Sandbox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  linkToggle() {
    return this.props.state.user.loggedIn
      ? (window.location.href = `${
          process.env.REACT_APP_CLIENT
        }/dashboard/recent`)
      : (window.location.href = `${process.env.REACT_APP_CLIENT}/`);
  }

  render() {
    console.log(this.props);
    let linkToggle = this.props.state.user.loggedIn ? (
      <button onClick={() => this.linkToggle()}>Dashboard</button>
    ) : (
      <button onClick={() => this.linkToggle()}>Back</button>
    );
    return (
      <ContainerDiv>
        <div className="wrap-collapsible">
          {/* <button id="leaveSandbox" onClick={() => this.linkToggle()}> */}
          {linkToggle}
          {/* Home{" "} */}
          {/* </button> */}
          <input id="collapsible" className="toggle" type="checkbox" />
          <label for="collapsible" class="lbl-toggle">
            More Info
          </label>

          <div className="collapsible-content">
            <div className="content-inner">
              <p>
                This is the code sandbox where you can flex those new React
                skills! Change anything in the editor and see it rendered in
                real time on the right hand side.
              </p>
            </div>
          </div>
        </div>

        <IframeContainer>
          <iframe
            src={`https://codesandbox.io/embed/new?codemirror=1&forcerefresh=1&verticallayout=0`}
            width="100%"
            height="890px"
            overflow="hidden"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            title="Test Sandbox"
          />
        </IframeContainer>
      </ContainerDiv>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getUser }
)(Sandbox);
