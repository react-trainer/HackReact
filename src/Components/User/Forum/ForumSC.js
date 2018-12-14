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

export const Title = styled.div`
  overflow: hidden;
  position: fixed;
  top: 1%;
  width: 100vw;
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const PostCard = styled.div`
  overflow: hidden;
  height: 20vh;
  width: 27vw;
  background-color: rgb(34, 34, 34);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2vw;
  box-shadow: 0px 4px 6px -3px inset rgb(0, 216, 255);
`;

export const AllPostsContainer = styled.div`
  overflow: hidden;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding-left: 5vw;
`;

export const PostContainer = styled.div`
  overflow: hidden;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 10vh;
`;

export const IndPost = styled.div`
  overflow: hidden;
  position: fixed;
  top: 10%;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35vh;
  align-items: center;
  align-content: center;
  margin-top: 5vh;
`;

export const CommentsContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 55%;
`;
