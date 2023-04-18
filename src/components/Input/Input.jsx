import React from "react";
import { useRouter } from "next/router";
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

const Input = ({value, bind}) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?search=${value}`)
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput {...bind} type="text" placeholder="Search game..." />
    </StyledForm>
  );
};

export default Input;
