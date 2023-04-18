import { useState } from "react";
import { useRouter } from "next/router";
import CardItem from "../components/CardItem/CardItem";
import Layout from "../components/Layout";
import Input from "../components/Input/Input";
import { GamesApi } from "./api/games";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import useInput from "../hooks/useInput";
import { CardList, NavButton, PaginationBar } from "../styles/styles";

const HomePage = ({ games, searched }) => {
  const router = useRouter();
  const [page, setPage] = useState(1)

  const [value, bind] = useInput("");

  const handleClick = (option) => {
    router.push(
      `?ordering=${router?.query?.ordering}&platforms=${router?.query?.platforms}&page=${option === '+' ? page + 1 : page - 1}`
    )
    setPage(prev => prev + 1)
  }

  return (
    <Layout title="Home" keywords="games catalog">
      <Input value={value} bind={bind} />
      <ControlPanel />
      <CardList>
        {value.length === 0 ?
          games.map(game => {
            return <CardItem
              key={game.id}
              game={game} />
          }) : searched.map(game => {
            return <CardItem
              key={game.id}
              game={game} />
          })}
      </CardList>
      <PaginationBar>
        <NavButton disabled={page === 1} type="button" onClick={() => handleClick('-')}>Prev</NavButton>
        <NavButton type="button" onClick={() => handleClick('+')}>Next</NavButton>
      </PaginationBar>
    </Layout>
  );
};

export const getServerSideProps = async (params) => {

  const games = await GamesApi.getGamesList(params?.query?.page, params?.query?.ordering, params?.query?.platforms);
  const searched = await GamesApi.getSearchGame(params?.query?.search)

  return {
    props: { games, searched }
  }
}

export default HomePage;