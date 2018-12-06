import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    0deg,
    rgb(0, 216, 255)-158%,
    rgb(38, 38, 38) 48%
  );
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  height: 98vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`;

export const Editor = styled.div`
  height: 97vh;
  width: 63vw;
  margin-top: 2vh;
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
  background-color: rgba(0, 0, 0, 0.65);
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

  :after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: "";
  }
`;

export const Dialog = styled.div`
  position: fixed;
  top: 20%;
  left: 36%;
  outline: 0;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: auto;
  cursor: default;
  border-radius: 4px;
  font-size: 1.1em;
  letter-spacing: 1.5px;
  z-index: 10001;
`;
