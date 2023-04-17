import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.div`
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
`;

const CardTitle = styled.h3`
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

const CardLink = styled(Link)`
  margin: 0;
  text-decoration: none;
`;

const CardImage = styled.div`
  width: 100%;
  height: 60%;
  position: relative;

  @media (max-width: 700px) {
    height: 60%;
  }
`;

const CardRate = styled.p`
  padding: 5px 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const CardDate = styled.p`
  padding-left: 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const CardItem = ({ game }) => {
  const [gameName] = useState(
    game.name.length > 22 ? game.name.slice(0, 22) + "..." : game.name
  );
  return (
    <CardWrapper>
      <CardImage>
        <Image
          src={game.background_image}
          fill
          
          alt={game.name}
        />
      </CardImage>
      <CardLink href="/game">
        <CardTitle>{gameName}</CardTitle>
      </CardLink>
      <CardRate>Rate: {game.rating}</CardRate>
      <CardDate>Release: {game.released}</CardDate>
    </CardWrapper>
  );
};

export default CardItem;
