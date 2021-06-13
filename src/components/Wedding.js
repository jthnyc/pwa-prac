import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
// import AddToCalendarHOC from "react-add-to-calendar-hoc";

const Wedding = () => {
  const {t} = useTranslation();
  const test = {
    border: 0,
  };
  // const AddToCalendarDropdown = AddToCalendarHOC();
  // // const weddingDate = "21 November 2021 21:00 UTC";
  // const startDateTime = "21 November 2021 21:00 UTC".toISOString();
  // const endDateTime = "22 November 2021 03:00 UTC".toISOString();
  // const event = {
  //   description: "Joanna and Gabe ties the knot!",
  //   endDatetime: endDateTime.format("YYYYMMDDTHHmmssZ"),
  //   location: "The Weylin, 175 Broadway, Brooklyn, NY 11211",
  //   startDatetime: startDateTime.format("YYYYMMDDTHHmmssZ"),
  //   title: "Super Fun Event",
  // };

  return (
    <WeddingContainer>
      <h2>{t("wedding.t")}</h2>
      <p>{t("wedding.subt")}</p>
      <InfoContainer>
        <WeddingTextContainer>
          <h3>The Weylin</h3>
          <h5>175 Broadway, Brooklyn, NY 11211</h5>
          <h3>November 21, 2021</h3>
          <h5>Ceremony begins at 5 PM EST; followed by cocktail hour and reception</h5>
        </WeddingTextContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.436102077581!2d-73.9623258!3d40.7101123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf7e3bbe5f895f55!2sWeylin!5e0!3m2!1sen!2sus!4v1623620077841!5m2!1sen!2sus"
          width="600"
          height="450"
          style={test}
          allowfullscreen=""
          loading="lazy"
          title="The Weylin"
        ></iframe>
      </InfoContainer>
    </WeddingContainer>
    // <LeftContainer>
    //   <WeddingContainer>
    //     <h2>Wedding</h2>
    //     <WeddingText>
    //       <EventDate>
    //         <EventLocation>
    //           <h2>Brooklyn, NY</h2>
    //           <h5>Saturday, November 20, 2021</h5>
    //           {/* <h5>
    //             <a href="https://weylin.com/" target="_blank" rel="noopener noreferrer">
    //               Weylin
    //             </a>
    //           </h5>
    //           <h5>5 PM EST</h5>
    //           <h6>Reception to follow</h6> */}
    //           <h4>The Weylin</h4>
    //           {/* <CountDown /> */}
    //         </EventLocation>

    //         {/* <Button>{"R.S.V.P."}</Button> */}
    //       </EventDate>
    //     </WeddingText>
    //   </WeddingContainer>
    // </LeftContainer>
  );
};

export default Wedding;

// const LeftContainer = styled.div`
//   // visibility: hidden;
//   // height: 100vh;

//   @media ${device.laptop} {
//     width: 60%;
//   }
// `;

const WeddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0;
  margin-left: 8%;
  margin-right: 8%;
  // padding: 3rem;
  // border: 1px solid gold;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const WeddingTextContainer = styled.div`
  margin-top: 2em;
  line-height: 2em;
`;

const InfoContainer = styled.div`
  display: flex;
`;

// const WeddingText = styled.div`
//   // border: 1px solid green;
//   margin-top: 2em;
//   line-height: 2em;
// `;

// const EventDate = styled.div`
//   color: charcoal;
//   margin-bottom: 2em;
// `;

// const EventLocation = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   padding-top: 1.5rem;
//   margin-bottom: 2em;
// `;
