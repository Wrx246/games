import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { GamesApi } from "../api/games";

const GameWrapper = styled.section`
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

const GameTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 15px;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const GameDescription = styled.p`
  max-width: 90%;
  font-size: 17px;
  padding: 15px 0;

  @media (max-width: 500px) {
    font-size: 14px;
    max-width: 90%;
  }
`;

const GameData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: 90%;
`;

const GameText = styled.span`
  color: #fff;
  font-size: 17px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const GameAnchor = styled.a`
  color: #fff;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

const GameImage = styled.div`
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

const GamePoster = styled.div`
  z-index: -1;
  opacity: .5;
`;

const SliderWrap = styled.div`
  max-width: 50%;

  @media (max-width: 1500px) {
    max-width: 70%;
  }

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

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
