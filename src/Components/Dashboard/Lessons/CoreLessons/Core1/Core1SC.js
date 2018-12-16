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
  font-family: "Exo 2";
`;

export const Content = styled.div`
  height: 98vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Editor = styled.div`
  height: 97vh;
  width: 63vw;
  margin-top: 2vh;
  margin-left: 1vw;
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
  max-width: 75vw;
  cursor: default;
  border-radius: 4px;
  font-size: 1.1em;
  letter-spacing: 1.5px;
  z-index: 10000;
  top: 5%;
  left: 12.5vw;
  font-family: "Exo 2";
`;

export const Title = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 34vw;
  background-color: rgb(37, 37, 37);
`;

export const Instructions = styled.div`
  padding-top: 10vh;
  margin-bottom: 8vh;
  padding-left: 2vw;
  padding-right: 2vw;

  img {
    height: auto;
    width: 20vw;
  }
`;

// export const Finished = styled.button``;

export const QuizDialog = styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  outline: 0;
  max-width: 35vw;
  min-width: 35vw;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  min-width: 75vw;
  cursor: default;
  border-radius: 4px;
  font-size: 1.1em;
  letter-spacing: 1.5px;
  z-index: 10001;
  top: 5%;
  left: 12.5%;
  height: 95vh;
`;

export const Answer = styled.div`
  transition: 0.1s;
  border-radius: 9999em;
  transition: 0.5s;
  /* transform: ${props => (props.correct ? "translateX(-100%)" : null)}; */
  background-color: ${props => (props.correct ? null : "red")};
  :hover {
    background-color: #00a6cc;
  }
`;

export const AnswerContainer = styled.div`
  max-width: 40vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.15em;
`;

export const Swal1 = styled.div`
  position: fixed;
  z-index: 10002;
`;

export const Wavy = styled.h1`
  font-family: Monoton;
  font-size: 5em;
`;

export const Spread = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5em;
`;
