import styled from "styled-components";


export const StyledForm = styled.form`
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;

    @media(max-width: 700px) {
      width: 70%;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    background: #202020;
    padding-left: 10px;
    font-size: 20px;
    color: #fff;
    font-style: italic;
`;