import styled from "styled-components";

export const OuterContainer = styled.div`
  /* position: fixed;*/
  height: ${props => props.height || null};
  width: 100vw;
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "white"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  height: ${props => props.height || null};
  width: ${props => props.width || "70vw"};
  display: flex;
  justify-content: ${props => props.justifyContent || null};
  align-items: ${props => props.alignItems || null};
  flex-direction: ${props => props.flexDirection || "row"};
  flex-wrap: wrap;
  overflow: hidden;
  margin: ${props => props.margin || "null"};

  @media (max-width: 1400px) {
    width: ${props => props.mediaWidth || null};
  }
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
  position: ${props => props.position || null};
  top: ${props => props.top || "0"};
  bottom: ${props => props.bottom || "0"};
  right: ${props => props.right || "0"};
  left: ${props => props.left || "0"};
  /* z-index: ${props => props.zIndex || "0"}; */
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

  a {
    display: flex;
    align-items: flex-end;
  }
`;
export const Card = styled.div`
  height: ${props => props.height || "41vh"};
  width: ${props => props.width || "20vw"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "rgb(34, 34, 34)"};
  color: ${props => props.color || "rgb(170, 170, 170)"};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "flex-end"};
  border-radius: ${props => props.borderRadius || "3%"};
  border: ${props => props.border || "1px solid rgb(0, 0, 0)"};
  box-shadow: ${props =>
    props.boxShadow || "0px 4px 6px -3px inset rgb(0,216,255)"};
  margin: ${props => props.margin || "25px"};
  overflow: ${props => props.overflow || "hidden"};
  background-size: ${props => props.backgroundSize || "cover"};
  object-fit: ${props => props.objectFit || "contain"};
  transition: 0.4s;

  :hover {
    box-shadow: 0px 4px 6px -3px inset rgb(212, 71, 200);
  }
`;

export const LessonOverlay = styled.div`
  width: 100%;
  border-radius: 3%;
  height: 30%;
  background-color: rgba(37, 37, 37, 0.8);
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${props => props.fontSize || "35px"};
  color: ${props => props.color || "white"};
  letter-spacing: ${props => props.letterSpacing || "1px"};
  text-transform: ${props => props.textTransform || null};
  font-family: ${props => props.fontFamily || null};
  font-weight: ${props => props.fontWeight || "bold"};
  margin: ${props => props.margin || "0"};
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  left: ${props => props.left || null};
  overflow: hidden;
  @media (max-width: 1400px) {
    font-size: ${props => props.mediaFontSize || null};
  }
`;
