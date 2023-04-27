import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import CardItem from "../components/CardItem/CardItem";
import Layout from "../components/Layout";
import Input from "../components/Input/Input";
import { GamesApi } from "./api/games";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import useInput from "../hooks/useInput";

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

const NavButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 10px;
  align-items:center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color:rgba(236, 240, 241, 0.5);
  }

  &:disabled {
    color: rgba(236, 240, 241, 0.5);
    cursor: not-allowed;
  }
`;

const PaginationBar = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`;

const HomePage = ({ games, searched }) => {
  const router = useRouter();
  const [page, setPage] = useState(1)

  const [value, bind] = useInput("");

  const handleClick = (option) => {
    if(option === '+') {
      router.push(
        `?ordering=${router?.query?.ordering}&platforms=${router?.query?.platforms}&page=${page + 1}`
      )
      setPage(prev => prev + 1)
    } else if(option === '-') {
      router.push(
        `?ordering=${router?.query?.ordering}&platforms=${router?.query?.platforms}&page=${page - 1}`
      )
      setPage(prev => prev - 1)
    }
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