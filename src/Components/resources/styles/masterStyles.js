import styled from "styled-components";

export const OuterContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "white"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  overflow: scroll;
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  width: ${props => props.width || "70vw"};
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Button = styled.button`
  height: ${props => props.height || "50px"};
  width: ${props => props.width || "127px"};
  border-color: ${props => props.borderColor || "rgba(255,255,255,0.4)"};
  border-width: ${props => props.borderSize || "1px"};
  border-style: ${props => props.borderStyle || "solid"};
  border-radius: ${props => props.borderRadius || "5.6rem"};
  border-top: ${props => props.borderTop || null};
  border-bottom: ${props => props.borderBottom || null};
  border-left: ${props => props.borderLeft || null};
  border-right: ${props => props.borderRight || null};
  background-image: ${props => props.backgroundImage || null};
  color: ${props => props.color || "white"};
  margin: ${props => props.margin || null};
  padding: ${props => props.padding || null};
  font-size: ${props => props.fontSize || "15px"};
  background-color: ${props => props.backgroundColor || "rgba(0, 0, 0, 0.01)"};
  letter-spacing: ${props => props.letterSpacing || "1px"};
  font-weight: ${props => props.fontWeight || "700"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  box-shadow: ${props => props.boxShadow || "0px -3px 20px -6px inset #a7f5f1"};
  transition: ${props => props.transition || "0.5s"};
  outline: none;
  overflow: hidden;
  cursor: pointer;

  :hover {
    box-shadow: 0px -3px 20px -3px inset #a7f5f1;
    transition: ${props => props.transition || "0.5s"};
  }
`;
export const Tab = styled(Button)`
  height: ${props => props.height || "60px"};
  width: ${props => props.width || "20rem"};
  border-radius: ${props => props.borderRadius || "0.25rem"};
  border-color: ${props => props.borderColor || "rgba(255,255,255,0.4)"};
  background-image: ${props => props.backgroundImage || null};
  overflow: hidden;
  outline: none;
`;
export const TabContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: ${props => props.padding || "0 0 1% 0"};
  margin: ${props => props.margin || "0"};
`;
export const Card = styled.div`
  height: ${props => props.height || "41vh"};
  width: ${props => props.width || "20vw"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "rgb(34, 34, 34)"};
  color: ${props => props.color || "rgb(170, 170, 170)"};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  border-radius: ${props => props.borderRadius || "3%"};
  border: ${props => props.border || "1px solid rgb(0, 0, 0)"};
  box-shadow: ${props =>
    props.boxShadow || "0px 4px 6px -3px inset rgb(0,216,255)"};
  margin: ${props => props.margin || "25px"};
  overflow: hidden;
  background-size: ${props => props.backgroundSize || "cover"};
`;
