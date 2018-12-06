import styled from "styled-components";

export const LeftContainer = styled.div`
  height: 100vh;
  width: 65vw;
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
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 216, 255);
`;
export const BottomRight = styled(UpperRight)`
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: column;
  color: #e5e5e5;
  letter-spacing: 1px;
  font-size: 1.25rem;

  p {
    font-weight: 200;
    margin: 4% 0;
    width: 85%;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-size: 40px;
  color: white;
  letter-spacing: 1px;
`;
