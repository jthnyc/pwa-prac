import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import Hotels from "./Hotels";

const Lodging = () => {
  const {t} = useTranslation();
  const hotels = [
    {
      id: "panel1",
      name: "Williamsburg Hotel",
      address: "96 Wythe Ave, Brooklyn, NY 11249",
      time: "10 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel2",
      name: "PUBLIC Hotel",
      address: "215 Chrystie St, New York, NY 10002",
      time: "30 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel3",
      name: "ONE Hotel",
      address: "60 Furman St, Brooklyn, NY 11201",
      time: "20 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel4",
      name: "Hoxton Hotel",
      address: "97 Wythe Ave, Brooklyn, NY 11249",
      discount: "HITCHED1121",
      time: "20 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel5",
      name: "Williamsburg Hotel",
      address: "96 Wythe Ave, Brooklyn, NY 11249",
      time: "10 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel6",
      name: "PUBLIC Hotel",
      address: "215 Chrystie St, New York, NY 10002",
      time: "30 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel7",
      name: "ONE Hotel",
      address: "60 Furman St, Brooklyn, NY 11201",
      time: "20 minutes",
      map: "https://www.google.com",
    },
    {
      id: "panel8",
      name: "Hoxton Hotel",
      address: "97 Wythe Ave, Brooklyn, NY 11249",
      discount: "HITCHED1121",
      time: "20 minutes",
      map: "https://www.google.com",
    },
  ];

  return (
    <LodgingContainer id="lodging">
      <h2>{t("lodging.t")}</h2>
      <p>{t("lodging.subt")}</p>
      <DetailContainer>
        <RecMapContainer>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv"
            width="100%"
            height="100%"
            title="Recommendations"
          ></iframe>
        </RecMapContainer>
        <TextContainer>
          <ul>
            {hotels.map((hotel) => {
              return (
                <Hotels
                  key={hotel.id}
                  name={hotel.name}
                  discount={hotel.discount}
                  time={hotel.time}
                  map={hotel.map}
                />
              );
            })}
          </ul>
        </TextContainer>
      </DetailContainer>
    </LodgingContainer>
  );
};

export default Lodging;

const LodgingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  margin-left: 8%;
  margin-right: 8%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const RecMapContainer = styled.div`
  width: 320px;
  height: 480px;

  @media ${device.mobileL} {
    width: 400px;
    height: 580px;
  }
  @media ${device.tablet} {
    width: 650px;
    height: 480px;
  }
  @media ${device.laptop} {
    width: 840px;
    height: 580px;
  }
  @media ${device.laptopL} {
    width: 740px;
    height: 680px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  border: 1px solid blue;
  min-width: 600px;
  margin-left: 0;
  margin-top: 30px;
  display: block;

  @media ${device.laptopL} {
    margin-left: 60px;
    margin-top: 0px;
    display: flex;
  }
`;
