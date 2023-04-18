import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  ButtonBar,
  PanelWrapper,
  SelectStyled,
  SortedButton,
} from "./panelStyles";

const ControlPanel = () => {
  const [ordering, setOrdering] = useState("-rating");
  const [selected, setSelected] = useState("4");
  const [rating, setRating] = useState(true);
  const [date, setDate] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.push(`?ordering=${ordering}&platforms=${selected}&page=1`);
  }, [ordering, selected]);

  const ratingClick = () => {
    setRating(!rating);
    if (rating) {
      setOrdering("rating");
    } else {
      setOrdering("-rating");
    }
  };

  const dateClick = () => {
    setDate(!date);
    if (date) {
      setOrdering("released");
    } else {
      setOrdering("-released");
    }
  };

  return (
    <PanelWrapper>
      <SelectStyled
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="4">PC</option>
        <option value="187">PlayStation 5</option>
        <option value="18">PlayStation 4</option>
        <option value="1">Xbox One</option>
        <option value="186">Xbox Series S/X</option>
        <option value="7">Nintendo Switch</option>
      </SelectStyled>
      <ButtonBar>
        <SortedButton onClick={ratingClick}>
          {rating ? "↓" : "↑"} Sorted by rating
        </SortedButton>
        <SortedButton onClick={dateClick}>
          {date ? "↓" : "↑"} Sorted by date
        </SortedButton>
      </ButtonBar>
    </PanelWrapper>
  );
};

export default ControlPanel;
