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
      map: "https://g.page/thewilliamsburghotel?share",
      site: "https://www.thewilliamsburghotel.com/",
    },
    {
      id: "panel2",
      name: "Hoxton Hotel",
      address: "97 Wythe Ave, Brooklyn, NY 11249",
      discount: "HITCHED1121",
      time: "20 minutes",
      map: "https://goo.gl/maps/ndqgAKfbBBCWooBM9",
      site: "https://thehoxton.com/",
    },
    {
      id: "panel4",
      name: "PUBLIC Hotel",
      address: "215 Chrystie St, New York, NY 10002",
      time: "30 minutes",
      map: "https://goo.gl/maps/9nxZtRS51sRvjKxW8",
      site: "https://www.publichotels.com/",
    },
    {
      id: "panel5",
      name: "Hilten Garden Inn Long Island City",
      address: "29-21 41st Ave, Queens, NY 11101",
      time: "15 minutes",
      map:
        "https://www.google.com/maps/dir//Hilton+Garden+Inn+Long+Island+City+New+York,+29-21+41st+Ave,+Queens,+NY+11101/@40.750225,-73.9391123,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c258d53a538c4b:0x8be3a5af657ae00a!2m2!1d-73.9369236!2d40.750225!3e0",
      site:
        "https://www.hilton.com/en/hotels/ispicgi-hilton-garden-inn-long-island-city-new-york/",
    },
    {
      id: "panel6",
      name: "Hyatt Place Long Island City",
      address: "27-03 43rd Ave, Queens, NY 11101",
      time: "15 minutes",
      map: "https://www.google.com",
      site:
        "https://www.hyatt.com/en-US/hotel/new-york/hyatt-place-long-island-city-new-york-city/lgazl?src=corp_lclb_gmb_seo_lgazl",
    },
    {
      id: "panel7",
      name: "Courtyard by Marriott Long Island City",
      address: "29-15 Queens Plaza N, Queens, NY 11101",
      time: "20 minutes",
      map: "https://www.google.com",
      site:
        "https://www.marriott.com/hotels/travel/nycql-courtyard-long-island-city-new-york-manhattan-view/",
    },
    {
      id: "panel3",
      name: "ONE Hotel",
      address: "60 Furman St, Brooklyn, NY 11201",
      time: "20 minutes",
      map: "https://www.google.com",
      site: "https://www.1hotels.com/brooklyn-bridge",
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
                  address={hotel.address}
                  discount={hotel.discount}
                  time={hotel.time}
                  map={hotel.map}
                  site={hotel.site}
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
  width: 80vw;
  height: 70vh;
  box-shadow: 10px 5px 5px gray;
  // border: 2px solid purple;

  @media ${device.mobileL} {
    width: 85vw;
  }

  @media ${device.laptopL} {
    width: 50vw;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  // border: 1px solid red;

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  margin-left: 0;
  margin-top: 30px;
  display: block;

  @media ${device.laptopL} {
    margin-left: 60px;
    margin-top: 0px;
    display: flex;
  }
`;
