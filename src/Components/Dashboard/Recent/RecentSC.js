import styled from "styled-components";

export const RecentProfileContainer = styled.div`
  height: 25vh;
  width: 75vw;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: rgba(50, 50, 50, 0.5);
  border-radius: 27px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 10px 18px 33px -11px rgba(0, 0, 0, 0.3);

  @media (max-width: 1400px) {
    height: 30vh;
  }
`;

export const ProfileImage = styled.img`
  position: relative;
  /* top: -110px; */
  height: 90%;
  width: 20%;
  border-radius: 4rem;
  margin-top: 10px;
  box-shadow: 1px 1px 25px 1px rgba(0, 0, 0, 0.3);
  @media (max-width: 1400px) {
    width: 25%;
  }
`;

export const HeatMapContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 10px;
  text-shadow: 2px 2px #000000;
  @media (max-width: 1400px) {
    height: 70%;
  }
`;

export const NextLessonContainer = styled.div`
  position: absolute;
  top: 55%;
  left: ${props => props.left || "20%"};
  height: 35vh;
  width: 20vw;
  margin-left: 2%;
  border-radius: 50%;
  box-shadow: 10px 18px 33px -11px rgba(0, 0, 0, 0.3);
  background-color: rgba(50, 50, 50, 0.5);
  transition: 0.8s;
  transform: ${props =>
    props.showNext ? "translateX(0%)" : "translateX(400%)"};
`;

export const ShowNextButton = styled.button`
  position: absolute;
  top: 36%;
  right: 18%;
  height: 4vh;
  width: 2vw;
  border-radius: 20%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgb(34, 82, 92);
  box-shadow: 6px 3px 23px -3px black,
    6px 3px 23px -3px inset rgba(255, 255, 255, 0.3);
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  :active {
    height: 3.3vh;
    width: 1.8vw;
  }

  @media (max-width: 1400px) {
    top: 42%;
    right: 18%;
    height: 5vh;
    width: 3vw;
  }
`;
