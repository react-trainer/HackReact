import styled from "styled-components";

export const OuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "white"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
`;

export const Button = styled.button`
  height: ${props => props.height || "50px"};
  width: ${props => props.width || "127px"};
  border-color: ${props => props.borderColor || "white"};
  border-width: ${props => props.borderSize || "1px"};
  border-style: ${props => props.borderStyle || "solid"};
  border-radius: ${props => props.borderRadius || "5.6rem"};
  border-top: ${props => props.borderTop || null};
  border-bottom: ${props => props.borderBottom || null};
  border-left: ${props => props.borderLeft || null};
  border-right: ${props => props.borderRight || null};
  color: ${props => props.color || "white"};
  font-size: ${props => props.fontSize || "15px"};
  background-color: ${props => props.backgroundColor || "rgba(0, 0, 0, 0.01)"};
  letter-spacing: ${props => props.letterSpacing || "1px"};
  font-weight: ${props => props.fontWeight || "700"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  box-shadow: 0px -3px 20px -6px inset #a7f5f1;
  transition: ${props => props.transition || "0.5s"};
  outline: none;
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
  margin-top: ${props => props.marginTop || "0"};
  margin-right: ${props => props.marginRight || "0"};
  margin-left: ${props => props.marginLeft || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  outline: none;
`;
