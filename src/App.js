import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {
  Welcome,
  Images1,
  Images2,
  Images3,
  Images4,
  Album,
  Nav2,
  Story,
  Faq,
  Email,
  Recommendations,
  COVID,
  Footer,
} from "./components/index";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import useLocalStorage from "react-use-localstorage";
import ParticlesBg from "particles-bg";
import {Button, TextField} from "@material-ui/core";

const {REACT_APP_SITE_PWD} = process.env;

function App() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [localAuth, setLocalAuth] = useLocalStorage("isAuth", false);
  const [error, setError] = useState();
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    random: 15,
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }

  const handleChange = (e) => {
    const input = e.target.value;
    setPassword(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== REACT_APP_SITE_PWD) {
      setError("Uh oh! Wrong password. Try again :)");
      setIsAuthenticated(false);
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
          <Panels>
            <Story />
          </Panels>
          <Images1 />
          <Panels>
            <Faq />
          </Panels>
          <Images2 />
          <Panels>
            <Email />
          </Panels>
          <Images3 />
          <Panels>
            <Recommendations />
          </Panels>
          <Panels>
            <COVID />
          </Panels>
          <Images4 />
          <Album />
          <Footer />
        </AppContainer>
      ) : (
        <div>
          <LandingContainer>
            <BackgroundContainer>
              <ParticlesBg type="custom" bg={true} config={config} />
              <FormContainer>
                <FormBox onSubmit={(e) => handleSubmit(e)}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => handleChange(e)}
                    value={password}
                  />
                  <Button type="submit" fullwidth color="default" size="large">
                    Enter
                  </Button>
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

const LandingContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: relative;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
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

const ErrorMessage = styled.div`
  text-align: center;
`;
