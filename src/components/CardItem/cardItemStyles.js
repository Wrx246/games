import Link from "next/link";
import styled from "styled-components";


export const CardWrapper = styled.div`
  width: 350px;
  height: 300px;
  background: #202020;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 700px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 450px) {
    width: 150px;
    height: 200px;
  }
`;

export const CardTitle = styled.h3`
  max-width: 90%;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  padding-top: 10px;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  color: #ffff;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 15px;
  }
`;

export const CardLink = styled(Link)`
  margin: 0;
  text-decoration: none;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 60%;
  position: relative;

  @media (max-width: 450px) {
    height: 50%;
  }
`;

export const CardRate = styled.p`
  padding: 5px 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const CardDate = styled.p`
  padding-left: 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;