import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const fieldsToUpdate = [
  "RSVP Status",
  "Guest List",
  "Vaccine Records",
  "Allergies",
  "Address",
  "High Risk List",
];

const UpdateRSVP = ({guest, list, checked, setChecked}) => {
  const classes = useStyles();
  //   const [rsvp, setRSVP] = useState(false);
  //   const [guestList, setGuestList] = useState(false);
  //   const [vaccineRecords, setVaccineRecords] = useState(false);
  //   const [allergies, setAllergies] = useState(false);
  //   const [address, setAddress] = useState(false);
  //   const [highRisk, setHighRisk] = useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log("CHECKED ===> ", checked);
  return (
    <div>
      <h2>Welcome back, {guest.name.split(" ")[0]}!</h2>
      <p>Here are your confirmed guests:</p>
      {list.map((guest) => {
        return <div key={guest.id}>{guest.name}</div>;
      })}
      <br />
      <p>
        Would you like to update? (Please note the final date to update RSVP will be
        September 20, 2021)
      </p>
      <List className={classes.root}>
        {fieldsToUpdate.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
      </List>
      {checked.map((item) => (
        <div>Item</div>
      ))}
      herro
    </div>
  );
};

export default UpdateRSVP;
