import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${props => (props.showNav ? "100vw" : "0vw")};
  height: 5vh;
  background-color: rgb(20, 117, 135);
  background-image: linear-gradient(
    20deg,
    rgb(0, 216, 255)-24%,
    rgb(38, 38, 38) 106%
  );
  transition: 0.5s;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: ${props => (props.showMenu ? "100vh" : "0vh")};
  width: ${props => (props.showMenu ? "100vw" : "0vw")};
  background-color: ${props =>
    props.showMenu ? "rgba(0,0,0,0.2)" : "rgba(53, 203, 191, 0.2)"};
  border-radius: 0 0 100% 0;
  transition: ${props => (props.showMenu ? "0.6s" : "0.15s")};
  /* transition-delay: ${props => (props.showMenu ? "0.4s" : "0.2s")}; */
  overflow: hidden;
`;

export const MenuInner = styled.div`
  position: relative;
  top: 0;
  left: 0;
  border-radius: 0 0 100% 0;
  height: ${props => (props.showMenu ? "90vh" : "0vh")};
  width: ${props => (props.showMenu ? "90vw" : "0vw")};
  background-image: linear-gradient(
    20deg,
    rgb(0, 216, 255)-24%,
    rgb(38, 38, 38) 106%
  );
  /* background-image: url("https://www.gizmo-experience.com/wp-content/uploads/2018/10/gizmo-homepage-mobile-fallback-1.jpg"); */
  box-shadow: ${props =>
    props.showMenu ? "2px -8px 40px 2px black" : "0 0 0 0"};
  overflow: hidden;
  transition: ${props => (props.showMenu ? "0.4s" : "0.2s")};
`;

export const MenuButtons = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  transform: ${props =>
    props.showMenu ? "translateX(120px)" : "translateY(1000px)"};
  top: -25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: ${props => (props.showMenu ? "30px" : "1px")};
  overflow: hidden;
  transition: ${props => (props.showMenu ? "0.7s" : "0s")};
  transition-delay: ${props => (props.showMenu ? "1s" : "0s")};
`;
export const MenuToggle = styled.button`
  position: absolute;
  left: 0;
  font-size: 25px;
  margin: 3px 2% 0 1%;
  background-color: rgba(0, 0, 0, 0.02);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
