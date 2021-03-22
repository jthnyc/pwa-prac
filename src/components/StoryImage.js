import React from "react";
import styled from "styled-components";
import g_bw from "../img/g_bw.JPG";
import j_color from "../img/j_color.JPG";
import {device} from "../device";

const StoryImage = () => {
  return (
    <StoryContainer>
      <StoryImg1></StoryImg1>
      <StoryImg2></StoryImg2>
    </StoryContainer>
  );
};

export default StoryImage;

const StoryContainer = styled.div`
  border: 1px solid green;
  display: grid;
  grid-template-columns: repeat(6, 16.5%);
  grid-template-rows: repeat(4, 20%);
  margin-left: 2rem;

  // @media ${device.mobileS} {
  //   display: none;
  // }
  // @media ${device.mobileM} {
  //   display: none;
  // }
  // @media ${device.mobileL} {
  //   display: none;
  // }
  // @media ${device.tablet} {
  //   display: none;
  // }
  // @media ${device.laptop} {
  //   border: 1px solid gold;
  // }
  // @media ${device.laptopL} {
  //   border: 1px solid red;
  // }
  // @media ${device.desktop} {
  //   border: 2px solid black;
  // }
`;

const StoryImg1 = styled.div`
  // border: 1px solid gray;
  background: transparent url(${g_bw}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  width: 60%;
  grid-column: 1 / span 5;
  grid-row: 1 / span 3;
`;

const StoryImg2 = styled.div`
  // border: 1px solid gray;
  background: transparent url(${j_color}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  width: 100%;
  grid-column: 4 / span 6;
  grid-row: 2 / span 5;
`;
