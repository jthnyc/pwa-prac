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
// import env from "react-dotenv";

function App() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [localAuth, setLocalAuth] = useLocalStorage("isAuth", false);
  const [error, setError] = useState();

  const handleChange = (e) => {
    const input = e.target.value;
    setPassword(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "123") {
      setError("Uh oh! Wrong password. Try again :)");
      setIsAuthenticated(false);
      setPassword("");
    } else {
      setIsAuthenticated(true);
      setLocalAuth(true);
    }
    setPassword("");
  };

  return (
    <div>
      {isAuthenticated || localAuth ? (
        <AppContainer>
          <GlobalStyle />
          <Nav2 />
          <Welcome />
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
                  <InputField
                    type="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="Open Sesame!"
                  />
                  <SubmitButton>Submit</SubmitButton>
                  <ErrorMessage>{error}</ErrorMessage>
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
  box-shadow: 0.05rem 0.05rem #888888;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 500px;
`;

const FormBox = styled.form`
  width: 80%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputField = styled.input`
  border: transparent;
  border-bottom: 0.025rem solid black;
  outline: none;
  width: 100%;
  height: 50px;
  text-align: center;

  &:focus::placeholder {
    color: transparent;
  }
`;

const SubmitButton = styled.button`
  border-style: none;
  color: black;
  border: 0.025rem solid black;
  width: 100%;
  outline: none;
  height: 50px;
  background: white;
`;

const ErrorMessage = styled.div`
  text-align: center;
`;
