import React from "react";
import styled from "styled-components";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";
import LanguageIcon from "@material-ui/icons/Language";
// import {Typography} from "@material-ui/core";
// import MuiAccordion from "@material-ui/core/Accordion";
// import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
// import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const Accordion = withStyles({
//   root: {
//     border: "1px solid rgba(44, 130, 201, 1)",
//     boxShadow: "none",
//     "&:not(:last-child)": {
//       borderBottom: 0,
//     },
//     "&:before": {
//       display: "none",
//     },
//     "&$expanded": {
//       margin: "auto",
//     },
//   },
//   expanded: {},
// })(MuiAccordion);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 280,
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(3),
  },
}));

// const AccordionSummary = withStyles({
//   root: {
//     backgroundColor: "white",
//     borderBottom: "1px solid rgba(0, 0, 0, .125)",
//     marginBottom: -1,
//     minHeight: 56,
//     "&$expanded": {
//       minHeight: 56,
//     },
//   },
//   content: {
//     "&$expanded": {
//       margin: "12px 0",
//     },
//   },
//   expanded: {},
// })(MuiAccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiAccordionDetails);

const Hotels = ({id, name, address, discount, time, map, site}) => {
  // const [expanded, setExpanded] = React.useState("panel1");
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  return (
    <HotelContainer>
      {/* <div> */}
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {/* <Grid container justifyContent="center" spacing={spacing}> */}
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <h4>{name}</h4>
              <p>Time to Weylin: {time}</p>
              <p>{address}</p>
              <div>
                <MapIcon />
                <Links href={map} target="_blank" rel="noopener noreferrer">
                  Google Map
                </Links>
              </div>
              <div>
                <LanguageIcon />
                <Links href={site} target="_blank" rel="noopener noreferrer">
                  Website
                </Links>
              </div>
              {discount ? <p>Code: {discount}</p> : ""}
            </Paper>
          </Grid>
          {/* </Grid> */}
        </Grid>
        {/* <Grid item xs={6}>
            <div> Hooray something is too! </div>
          </Grid>
          <Grid item xs={4}>
            <div> Another item! </div>
          </Grid>
          <Grid item xs={4}>
            <div> Showing off rows! </div>
          </Grid>
          <Grid item xs={4}>
            <div> Last item! </div>
          </Grid> */}
      </Grid>
      {/* <Accordion square expanded={expanded === id} onChange={handleChange(id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>
              {name} ({time})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href={map} target="_blank" rel="noopener noreferrer">
                {address}
              </a>
            </Typography>
          </AccordionDetails>
          {discount ? (
            <AccordionDetails>
              <Typography>Discount code: {discount}</Typography>
            </AccordionDetails>
          ) : (
            ""
          )}
        </Accordion> */}
      {/* </div> */}
    </HotelContainer>
  );
};

export default Hotels;

const HotelContainer = styled.li`
  border: 1px solid red;
  // flex: 1;
  // display: flex;
`;

const Links = styled.a`
  color: purple;
`;
