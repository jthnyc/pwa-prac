import React from "react";
import styled from "styled-components";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";
import LanguageIcon from "@material-ui/icons/Language";
import {device} from "../device";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 380,
    width: 240,
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      height: 350,
      width: 290,
    },
  },
}));

const Hotels = ({id, name, bookby, discount, time, map, book}) => {
  const classes = useStyles();

  return (
    <HotelContainer>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>
            <HotelName>{name}</HotelName>
            <TravelTime>
              Estimated time to venue
              <br />
              <Time>{time}</Time>
            </TravelTime>
            <LinkContainer>
              <MapIcon />
              <Links href={map} target="_blank" rel="noopener noreferrer">
                <LinkText>Google Map</LinkText>
              </Links>
            </LinkContainer>
            {book ? (
              <LinkContainer>
                <LanguageIcon />
                <Links href={book} target="_blank" rel="noopener noreferrer">
                  <LinkText>Booking Link</LinkText>
                </Links>
              </LinkContainer>
            ) : (
              <p>Booking Link Coming Soon!</p>
            )}
            <HotelAddress>{bookby}</HotelAddress>
            {/* <LinkContainer>
              <LanguageIcon />
              <Links href={site} target="_blank" rel="noopener noreferrer">
                <LinkText>Website</LinkText>
              </Links>
            </LinkContainer> */}
            {/* {discount ? <LinkText>Code: {discount}</LinkText> : ""} */}
          </Paper>
        </Grid>
      </Grid>
    </HotelContainer>
  );
};

export default Hotels;

const HotelContainer = styled.li`
  margin-bottom: 15px;
  display: flex;

  @media ${device.tablet} {
    justify-content: center;
    margin-right: 2.5rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled.a`
  color: black;
`;

const HotelName = styled.h4`
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TravelTime = styled.p`
  // font-size: 0.6em;
`;

const Time = styled.div`
  font-style: italic;
`;

const HotelAddress = styled.p`
  // font-size: 0.6em;
`;

const LinkText = styled.p`
  // font-size: 0.6em;
`;
