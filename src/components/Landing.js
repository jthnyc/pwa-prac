import React, {useState} from "react";
import styled from "styled-components";
import {background} from "../img/index";

const Landing = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    console.log("input: ", input);
    setPassword(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    if (password !== "123") {
      console.log("wrong password");
    }
    localStorage.setItem("password", password);
    setIsAuthenticated(true);
    setPassword("");
  };

  return (
    <LandingContainer>
      <BackgroundContainer>
        <FormContainer>
          <FormBox onSubmit={(e) => handleSubmit(e)}>
            <InputField type="text" onChange={(e) => handleChange(e)} />
            <SubmitButton>Submit</SubmitButton>
          </FormBox>
        </FormContainer>
      </BackgroundContainer>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // padding: 2rem;
  // height: 800px;
  position: relative;
  width: 100%;
  height: auto;
  left: 0;
`;

const BackgroundContainer = styled.div`
  position: relative;
  background: transparent url(${background}) no-repeat center;
  background-size: cover;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const FormBox = styled.form`
  // border: 1px solid red;
`;

const InputField = styled.input`
  border: transparent;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
`;

const SubmitButton = styled.button`
  border-style: none;
  color: green;
  background-color: darkblue;
  // height: 90px;
  width: 100%;
  outline: none;
`;
