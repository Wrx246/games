import React from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const StyledForm = styled.form`
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;

    @media(max-width: 700px) {
      width: 70%;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    background: #202020;
    padding-left: 10px;
    font-size: 20px;
    color: #fff;
    font-style: italic;
`;

const Input = () => {
  const [value, bind, reset] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput {...bind} type="text" placeholder="Search game..." />
    </StyledForm>
  );
};

export default Input;
