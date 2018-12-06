import styled from "styled-components";

export const LeftContainer = styled.div`
  height: 100vh;
  width: 65vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div`
  height: 100vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
`;
export const UpperRight = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 216, 255);
  font-weight: 100;
  letter-spacing: 1px;
  p {
    margin: 4% 0;
    text-align: center;
    width: 80%;
  }
`;
export const BottomRight = styled(UpperRight)`
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: column;
  color: #e5e5e5;
  font-size: 1.05rem;

  p {
    font-weight: 200;
    margin: 4% 0;
    width: 85%;
    text-align: center;
    letter-spacing: 3px;
  }
`;
export const Title = styled.h1`
  font-size: ${props => props.fontSize || "35px"};
  color: ${props => props.color || "white"};
  letter-spacing: 1px;
  text-transform: ${props => props.textTransform || null};
`;
