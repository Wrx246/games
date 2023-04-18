import styled from "styled-components";


export const CardList = styled.section`
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

export const NavButton = styled.button`
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

export const PaginationBar = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`;