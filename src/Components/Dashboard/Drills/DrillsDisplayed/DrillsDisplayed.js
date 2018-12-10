import React, { Component } from "react";
import { connect } from "react-redux";
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
      .map((value, index) => {
        return value.drill_title;
      })
      .filter((value, index) => {
        return value.toLowerCase().includes(searchDrillsInput);
      })
      .map((value, index) => {
        return <DrillsContainer key={index}>{value}</DrillsContainer>;
      });

    return (
      <MainContainer height="100vh" flexDirection="column" alignItems="center">
        <HeaderContainer>
          <Title> Drills by CodeWars </Title>{" "}
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
