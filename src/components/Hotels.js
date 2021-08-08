import React from "react";
import styled from "styled-components";
import {withStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(44, 130, 201, 1)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "white",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Hotels = ({id, name, discount, time, map}) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <HotelContainer>
      <div>
        <Accordion square expanded={expanded === id} onChange={handleChange(id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Time to Weylin by Car: {time}</Typography>
            {discount ? <Typography>Discount code: {discount}</Typography> : ""}
          </AccordionDetails>
        </Accordion>
      </div>
    </HotelContainer>
  );
};

export default Hotels;

const HotelContainer = styled.li`
  //   border: 1px solid red;
  flex: 1;
`;
