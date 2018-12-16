import styled from "styled-components";

export const RecentProfileContainer = styled.div`
  height: 20vh;
  width: 75vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img`
  position: relative;
  /* top: -110px; */
  height: auto;
  width: 25%;
  border-radius: 4rem;
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
`;
