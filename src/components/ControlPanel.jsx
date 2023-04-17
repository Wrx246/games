import React, { useState } from "react";
import styled from "styled-components";

const PanelWrapper = styled.div`
  width: 70%;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SelectStyled = styled.select`
  width: 150px;
  height: 25px;
  background: #202020;
  border: none;
  color: #fff;
  font-size: 18px;
`;

const ButtonBar = styled.div`
  display: flex;
  gap: 10px;
`;

const SortedButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 0.5;
  }
`;

const ControlPanel = () => {
  const [rating, setRating] = useState(true);
  const [date, setDate] = useState(true);

  const ratingClick = () => {
    setRating(!rating)
  }

  const dateClick = () => {
    setDate(!date)
  }

  return (
    <PanelWrapper>
      <SelectStyled>
        <option value="PC">PC</option>
        <option value="PlayStation 5">PlayStation 5</option>
        <option value="PlayStation 4">PlayStation 4</option>
        <option value="Xbox One">Xbox One</option>
        <option value="Xbox Series S/X">Xbox Series S/X</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="iOS">iOS</option>
        <option value="Android">Android</option>
      </SelectStyled>
      <ButtonBar>
        <SortedButton onClick={ratingClick}>{rating ? '↓' : '↑'} Sorted by rating</SortedButton>
        <SortedButton onClick={dateClick}>{date ? '↓' : '↑'} Sorted by date</SortedButton>
      </ButtonBar>
    </PanelWrapper>
  );
};

export default ControlPanel;
