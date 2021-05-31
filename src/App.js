import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {
  Welcome,
  Photos,
  Nav2,
  Story,
  Faq,
  Email,
  COVID,
  Footer,
} from "./components/index";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import {device} from "./device";
import {background2} from "../src/img/index";
import useLocalStorage from "react-use-localstorage";
import {divider} from "./img/index";

function App() {
  // need to update the following to use LoginContext
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [localAuth, setLocalAuth] = useLocalStorage("isAuth", false);

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
      // need to add error handle on frontend
    }
    setIsAuthenticated(true);
    setLocalAuth(true);
    setPassword("");
  };

  return (
    <div>
      {isAuthenticated || localAuth ? (
        <AppContainer>
          <GlobalStyle />
          <Nav2 />
          <Welcome />
          {/* Working on conditionally rendering a different Nav
          Using Bootstrap for now */}
          {/* {window.innerWidth === 425 ? <NavMenu /> : <Nav />} */}
          <Test>
            <Left>
              <Photos />
            </Left>
            <Right>
              <Panels>
                <Story />
              </Panels>
              <img src={divider} alt="hi" />
              <Panels>
                <Faq />
              </Panels>
              <img src={divider} alt="hi" />
              <Panels>
                <Email />
              </Panels>
              <img src={divider} alt="hi" />
              <Panels>
                <COVID />
              </Panels>
              <Footer />
            </Right>
          </Test>
        </AppContainer>
      ) : (
        <div>
          <LandingContainer>
            <BackgroundContainer>
              <FormContainer>
                <FormBox onSubmit={(e) => handleSubmit(e)}>
                  <InputField type="password" onChange={(e) => handleChange(e)} />
                  <SubmitButton>Submit</SubmitButton>
                </FormBox>
              </FormContainer>
            </BackgroundContainer>
          </LandingContainer>
        </div>
      )}
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Panels = styled.div`
  display: flex;
`;

const Test = styled.div`
  display: flex;
`;

const Left = styled.div`
  @media ${device.laptop} {
    width: 60%;
  }
`;

const Right = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 40%;
  }
`;

const LandingContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: relative;
  background: transparent url(${background2}) no-repeat center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  border: 5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 500px;
`;

const FormBox = styled.form`
  width: 80%;
`;

const InputField = styled.input`
  border: transparent;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  height: 50px;
  text-align: center;
`;

const SubmitButton = styled.button`
  border-style: none;
  color: white;
  background-color: teal;
  width: 100%;
  outline: none;
  height: 50px;
`;
