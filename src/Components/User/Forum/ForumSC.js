import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    0deg,
    rgb(0, 216, 255)-158%,
    rgb(38, 38, 38) 48%
  );
  color: white;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;

  :after {
    height: 100%;
    margin-left: -0.05em;
    content: "";
    display: flex;
    align-content: center;
    align-items: center;
  }
`;

export const Dialog = styled.div`
  position: fixed;
  outline: 0;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  min-width: 75vw;
  cursor: default;
  border-radius: 4px;
  font-size: 1.1em;
  letter-spacing: 1.5px;
  z-index: 10000;
  top: 20%;
  left: 12.5vw;
`;

export const NewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
