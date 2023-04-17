import styled from "styled-components";
import CardItem from "../components/CardItem";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { GamesApi } from "../api/games";
import ControlPanel from "../components/ControlPanel";

const CardList = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px auto;
  max-width: 90%;

  @media (max-width: 700px) {
    max-width: 95%;
  }
`;

const HomePage = ({ games }) => {
  
  return (
    <Layout title="Home" keywords="games catalog">
      <Input />
      <ControlPanel />
      <CardList>
        {games.map(game => {
          return <CardItem key={game.id} game={game} />
        })}
      </CardList>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  
  const games = await GamesApi.getGamesList(1);

  return {
    props: { games }
  }
}

export default HomePage;