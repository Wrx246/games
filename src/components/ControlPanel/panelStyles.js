import styled from "styled-components";


export const PanelWrapper = styled.div`
  width: 70%;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SelectStyled = styled.select`
  width: 150px;
  height: 25px;
  background: #202020;
  border: none;
  color: #fff;
  font-size: 18px;
`;

export const ButtonBar = styled.div`
  display: flex;
  gap: 10px;
`;

export const SortedButton = styled.button`
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