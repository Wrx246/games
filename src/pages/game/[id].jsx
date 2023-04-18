import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { GamesApi } from "../../api/games";
import Layout from "../../components/Layout";
import {
  GameAnchor,
  GameData,
  GameDescription,
  GameImage,
  GamePoster,
  GameText,
  GameTitle,
  GameWrapper,
  SliderWrap,
} from "./gameStyles";

const GamePage = ({ game, screenshots }) => {
  const theObj = { __html: game.description };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout title={game.name} keywords={game.name}>
      <GameWrapper>
        <GameTitle>{game.name}</GameTitle>
        <GamePoster>
          <Image src={game.background_image} objectFit="cover" fill alt={game.name} />
        </GamePoster>
        <GameData>
          <GameAnchor href={game.website}>Game site</GameAnchor>
          <GameText>Rating: {game.rating}</GameText>
          <GameText>Release: {game.released}</GameText>
        </GameData>
        <GameDescription dangerouslySetInnerHTML={theObj} />
        <SliderWrap>
          <Slider {...settings}>
            {screenshots?.map((screen) => {
              return (
                <GameImage key={screen.id}>
                  <Image src={screen.image} fill alt={game.name} />
                </GameImage>
              );
            })}
          </Slider>
        </SliderWrap>
      </GameWrapper>
    </Layout>
  );
};

export const getServerSideProps = async (params) => {
  const game = await GamesApi.getGame(params.query.id);
  const screenshots = await GamesApi.getGameScreenshots(params.query.id);

  return {
    props: { game, screenshots },
  };
};

export default GamePage;
