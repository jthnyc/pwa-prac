import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Wedding = () => {
  const {t} = useTranslation();
  return (
    <WeddingContainer>
      <h2>{t("wedding.t")}</h2>
      <p>{t("wedding.subt")}</p>
      <WeddingTextContainer>The Weylin</WeddingTextContainer>
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
