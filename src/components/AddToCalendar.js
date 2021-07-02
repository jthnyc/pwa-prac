import React from "react";
import AddToCalendar from "react-add-to-calendar";

const AddToCalBtn = () => {
  let event = {
    title: "Joanna and Gabe Wedding",
    location: "Williamsburg, NY",
    startTime: "2016-09-16T20:15:00-04:00",
    endTime: "2016-09-16T21:45:00-04:00",
  };

  return <AddToCalendar event={event} />;
};

export default AddToCalBtn;
