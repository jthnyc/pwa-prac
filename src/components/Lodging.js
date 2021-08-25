import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import Hotels from "./Hotels";
import {Grid} from "@material-ui/core";

const Lodging = () => {
  const {t} = useTranslation();
  const hotels = [
    {
      id: "panel1",
      name: "Hilton Garden Inn Long Island City",
      address: "29-21 41st Ave, Queens, NY 11101",
      time: "20 minutes",
      map:
        "https://www.google.com/maps/dir//Hilton+Garden+Inn+Long+Island+City+New+York,+29-21+41st+Ave,+Queens,+NY+11101/@40.750225,-73.9391123,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c258d53a538c4b:0x8be3a5af657ae00a!2m2!1d-73.9369236!2d40.750225!3e0",
      site:
        "https://www.hilton.com/en/hotels/ispicgi-hilton-garden-inn-long-island-city-new-york/",
      book:
        "https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=ISPICGI&groupCode=HMWB21&arrivaldate=2021-11-19&departuredate=2021-11-21&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT",
    },
    {
      id: "panel2",
      name: "Courtyard by Marriott Long Island City",
      address: "29-15 Queens Plaza N, Queens, NY 11101",
      time: "20 minutes",
      map: "https://g.page/courtyardlongislandcity?share",
      site:
        "https://www.marriott.com/hotels/travel/nycql-courtyard-long-island-city-new-york-manhattan-view/",
      book: "https://www.marriott.com/events/start.mi?id=1629230249158&key=GRP",
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
        <HotelsContainer>
          <CardsContainer>
            <ul>
              <Grid container spacing={0}>
                {hotels.map((hotel) => {
                  return (
                    <Hotels
                      key={hotel.id}
                      name={hotel.name}
                      address={hotel.address}
                      discount={hotel.discount}
                      time={hotel.time}
                      map={hotel.map}
                      book={hotel.book}
                    />
                  );
                })}
              </Grid>
            </ul>
          </CardsContainer>
        </HotelsContainer>
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
  width: 80vw;
  height: 60vh;
  box-shadow: 10px 5px 5px gray;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardsContainer = styled.div`
  margin-top: 30px;
  width: 70vw;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    width: 80vw;
  }
`;
