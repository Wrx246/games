import React, { useState } from "react";
import Image from "next/image";
import {
  CardDate,
  CardImage,
  CardLink,
  CardRate,
  CardTitle,
  CardWrapper,
} from "./cardItemStyles";

const CardItem = ({ game }) => {
  const [gameName] = useState(
    game.name.length > 22 ? game.name.slice(0, 22) + "..." : game.name
  );
  return (
    <CardWrapper>
      <CardImage>
        {game.background_image && (
          <Image
            src={game.background_image}
            fill
            sizes="(max-width: 768px) 100vw"
            alt={game.name}
          />
        )}
      </CardImage>
      <CardLink href={`/game/${game.slug}`}>
        <CardTitle>{gameName}</CardTitle>
      </CardLink>
      <CardRate>Rate: {game.rating}</CardRate>
      <CardDate>Release: {game.released}</CardDate>
    </CardWrapper>
  );
};

export default CardItem;
