import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MainContainer, Title } from "../../../resources/styles/masterStyles";
import {
  SearchInput,
  DrillsContainer,
  HeaderContainer,
  CodeWarsLogo
} from "./DrillsDisplayedSC";
import { updateInput, getDrills } from "../../../../ducks/userReducer";
import CodeWars from "./pictures/codewars-logo.png";

class DrillsDisplayed extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getDrills();
  }
  render() {
    const { updateInput } = this.props;
    const { drills, searchDrillsInput } = this.props.user;
    const displayDrills = drills
      .filter(value => {
        return value.drill_title.toLowerCase().includes(searchDrillsInput);
      })
      .map((value, index) => {
        return (
          <DrillsContainer key={index}>
            <Link to={`/sandbox/${value.drill_id}`}>{value.drill_title}</Link>
          </DrillsContainer>
        );
      });
    return (
      <MainContainer height="100vh" flexDirection="column" alignItems="center">
        <HeaderContainer>
          <Title fontFamily="Scada"> Powered by CodeWars </Title>{" "}
          <CodeWarsLogo src={CodeWars} alt="Codewars Logo" />
        </HeaderContainer>
        <SearchInput
          placeholder="Search a Title Here..."
          type="text"
          name="searchDrillsInput"
          onChange={e => updateInput(e)}
        />
        {displayDrills}
      </MainContainer>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput, getDrills }
)(DrillsDisplayed);
