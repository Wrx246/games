import styled from "styled-components";


export const GameWrapper = styled.section`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1500px) {
    gap: 20px;
    margin-top: 30px;
  }
`;

export const GameTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 15px;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const GameDescription = styled.p`
  max-width: 90%;
  font-size: 17px;
  padding: 15px 0;

  @media (max-width: 500px) {
    font-size: 14px;
    max-width: 90%;
  }
`;

export const GameData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: 90%;
`;

export const GameText = styled.span`
  color: #fff;
  font-size: 17px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const GameAnchor = styled.a`
  color: #fff;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

export const GameImage = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  @media (max-width: 1000px) {
    height: 300px;
  }

  @media (max-width: 500px) {
    height: 200px;
  }
`;

export const GamePoster = styled.div`
  z-index: -1;
  opacity: .5;
`;

export const SliderWrap = styled.div`
  max-width: 50%;

  @media (max-width: 1500px) {
    max-width: 70%;
  }

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;