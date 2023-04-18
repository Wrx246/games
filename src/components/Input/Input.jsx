import React from "react";
import { useRouter } from "next/router";
import { StyledForm, StyledInput } from "./inputStyles";



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
