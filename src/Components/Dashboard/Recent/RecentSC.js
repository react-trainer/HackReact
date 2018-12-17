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
`;
